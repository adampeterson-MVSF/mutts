// prisma/seed-helpers.ts - Pure utility functions for seeding
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import { DogStatus, UserRole, Gender, DogSize, ShiftStatus, AppType, AppStatus, HousingType, YardType } from "@prisma/client";
import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/db";

// Helper functions for dog data normalization
export function normalizeGender(gender: string): Gender | null {
  const lower = gender.toLowerCase().trim();
  if (lower === 'male' || lower === 'm') return Gender.MALE;
  if (lower === 'female' || lower === 'f') return Gender.FEMALE;
  return null;
}

export function normalizeSize(size: string): DogSize | null {
  const lower = size.toLowerCase().trim();
  if (lower.includes('toy') || lower === 'xs') return DogSize.TOY;
  if (lower.includes('small') || lower === 's') return DogSize.SMALL;
  if (lower.includes('medium') || lower === 'm') return DogSize.MEDIUM;
  if (lower.includes('large') || lower === 'l' || lower === 'xl') return DogSize.LARGE;
  return null;
}

export function parseAgeToMonths(age: string): number | null {
  if (!age || age.trim() === '') return null;

  const text = age.toLowerCase().trim();

  // Try to extract numbers followed by "year" or "month"
  const yearMatch = text.match(/(\d+)\s*years?/);
  if (yearMatch) {
    return parseInt(yearMatch[1]) * 12;
  }

  const monthMatch = text.match(/(\d+)\s*mos?\.?|(\d+)\s*months?/);
  if (monthMatch) {
    return parseInt(monthMatch[1] || monthMatch[2]);
  }

  // Try to parse direct number as years
  const numMatch = text.match(/(\d+)/);
  if (numMatch) {
    const num = parseInt(numMatch[1]);
    // If it's a reasonable age, assume years
    if (num > 0 && num < 30) {
      return num * 12;
    }
  }

  return null;
}

// Preflight diagnostics function
export function assertUnique<T>(items: T[], key: (x: T) => string, label: string) {
  const seen = new Map<string, number>();
  const dups: Record<string, number> = {};
  items.forEach((it) => {
    const k = key(it);
    const n = (seen.get(k) ?? 0) + 1;
    seen.set(k, n);
    if (n > 1) dups[k] = n;
  });
  if (Object.keys(dups).length) {
    throw new Error(`[SEED] Duplicate ${label}: ${JSON.stringify(dups, null, 2)}`);
  }
}

type VolunteerSnapshot = {
  id: string; name: string; email: string;
  preferences: { weekdayAvailability: boolean; morningAvailability: boolean };
  flags: { trainingComplete: boolean; fosterApproved: boolean };
  role: UserRole;
};

function createDogFromRecord(record: Record<string, string>) {
  const weightLbs = parseFloat(record.weight_lbs) || null;
  const months = parseAgeToMonths(record.est_age_years);
  const dob = new Date(); dob.setMonth(dob.getMonth() - (months || 96));

  return {
    name: record.name || 'Unknown', status: DogStatus.AVAILABLE, breed: record.breed || null,
    dateOfBirth: dob, bioPublic: record.bio || null, notesInternal: record.foster_notes || null,
    specialNeeds: record.status?.toLowerCase().includes('hospice') || false,
    primaryPhotoUrl: record.photo_hero_url?.startsWith('http') || record.photo_hero_url?.startsWith('data:')
      ? record.photo_hero_url : "https://via.placeholder.com/600x400?text=No+Photo",
    gender: normalizeGender(record.gender) || Gender.UNKNOWN,
    size: normalizeSize(record.size) || DogSize.UNKNOWN,
    weight_lbs: weightLbs, mutt_id: record.mutt_id || null, page_url: record.page_url || null,
    createdAt: new Date("2024-01-01T00:00:00Z"), updatedAt: new Date("2024-01-01T00:00:00Z"),
  };
}

function createTestDog(name: string, specialNeeds: boolean, breed: string, dateOfBirth: Date) {
  return {
    name, status: DogStatus.AVAILABLE, breed, dateOfBirth,
    bioPublic: specialNeeds ? `${name} is a sweet dog with special needs.` : 'A friendly companion.',
    notesInternal: specialNeeds ? 'Test dog for special needs' : 'Test dog for breed filtering',
    specialNeeds, primaryPhotoUrl: `https://via.placeholder.com/600x400?text=${name.replace(' ', '+')}`,
    gender: Gender.UNKNOWN, size: DogSize.MEDIUM, weight_lbs: specialNeeds ? 45 : 40,
    mutt_id: `test-${name.toLowerCase().replace(' ', '-')}`, page_url: 'https://example.com/test-dog',
    createdAt: new Date("2024-01-01T00:00:00Z"), updatedAt: new Date("2024-01-01T00:00:00Z"),
  };
}

async function stageDogs(dataset: 'realistic' | 'demo' = 'realistic') {
  console.log("🐕 Creating dogs from CSV...");
  const records = parse(fs.readFileSync(path.join('muttville_available_mutts_all_46_partial_details.csv'), 'utf8'),
    { columns: true, skip_empty_lines: true, relax_column_count: true, trim: true }) as Record<string, string>[];

  const dogCount = dataset === 'demo' ? 20 : Math.min(60, records.length);
  const selectedRecords = records.sort(() => Math.random() - 0.5).slice(0, dogCount);

  await prisma.dog.createMany({ data: selectedRecords.map(createDogFromRecord), skipDuplicates: true });
  console.log(`  ✅ Created ${dogCount} dogs`);

  await prisma.dog.upsert({
    where: { id: 999999 }, update: { specialNeeds: true }, create: createTestDog('Sprout', true, 'Mixed Breed', new Date('2013-11-01'))
  });

  const breedCounts = await prisma.dog.groupBy({ by: ['breed'], _count: { breed: true }, where: { status: DogStatus.AVAILABLE } });
  if (!breedCounts.some(b => b._count.breed >= 2)) {
    const breed = breedCounts.sort((a, b) => b._count.breed - a._count.breed)[0]?.breed || 'Mixed Breed';
    await prisma.dog.create({ data: createTestDog('Buddy Jr', false, breed, new Date('2022-11-01')) });
  }
}

async function stageVolunteers(dataset: 'realistic' | 'demo' = 'realistic') {
  console.log("👥 Creating volunteers...");
  const snapshot = JSON.parse(fs.readFileSync(path.join('prisma', 'seed-snapshots', 'volunteers.20251028.json'), 'utf8'));
  const volunteers: VolunteerSnapshot[] = snapshot.volunteers;

  assertUnique(volunteers, v => v.email.toLowerCase(), 'emails');

  const count = dataset === 'demo' ? 30 : 80;
  const selected = volunteers.sort(() => Math.random() - 0.5).slice(0, count);

  const legacyEmails = new Set(['admin@test.example.com', 'staff@test.example.com', 'volunteer@test.example.com', 'foster@test.example.com', '=csv@example.com']);
  if (selected.some(v => legacyEmails.has(v.email.toLowerCase()))) throw new Error('[SEED] Email conflict');
  if (selected.some(v => !v.email.endsWith('@snapshot.example.test'))) throw new Error('[SEED] Invalid email domain');

  const volunteerData = selected.map(v => ({
    id: v.id, email: v.email, name: v.name, role: v.role,
    prefersWeekdays: v.preferences.weekdayAvailability, prefersMornings: v.preferences.morningAvailability,
    trainingCompleted: v.flags.trainingComplete, backgroundCheckCompleted: true,
  }));

  await prisma.profile.createMany({ data: volunteerData, skipDuplicates: true });

  const fosters = selected.filter(v => v.flags.fosterApproved).map(v => ({
    profileId: v.id, hasCats: true, hasDogs: true,
    canAdministerMeds: v.role === UserRole.ADMIN || v.role === UserRole.STAFF,
    notes: `Generated foster - ${v.role.toLowerCase()}`,
  }));

  if (fosters.length) await prisma.fosterProfile.createMany({ data: fosters, skipDuplicates: true });
  if (volunteerData.length < count) throw new Error(`[SEED] Not enough volunteers: ${volunteerData.length} < ${count}`);

  console.log(`  ✅ Created ${volunteerData.length} volunteers (${fosters.length} fosters)`);
}

async function stageShifts(dataset: 'realistic' | 'demo' = 'realistic') {
  console.log("🗓️ Creating shifts...");
  const now = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;

  const baseShifts = [
    {
      title: "Morning Walk Shift",
      description: "Help with morning walks and feeding.",
      startsAt: new Date(now.getTime() + 2 * dayMs),
      endsAt: new Date(now.getTime() + 2 * dayMs + 2 * hourMs),
      capacity: 5,
      status: ShiftStatus.ACTIVE,
    },
    {
      title: "Weekend Adoption Fair",
      description: "Assist with handling dogs at the adoption fair.",
      startsAt: new Date(now.getTime() + 4 * dayMs),
      endsAt: new Date(now.getTime() + 4 * dayMs + 4 * hourMs),
      capacity: 10,
      status: ShiftStatus.ACTIVE,
    },
    {
      title: "Past Cleaning Day",
      description: "Deep clean kennels.",
      startsAt: new Date(now.getTime() - 5 * dayMs),
      endsAt: new Date(now.getTime() - 5 * dayMs + 3 * hourMs),
      capacity: 8,
      status: ShiftStatus.DELETED,
      deletedAt: new Date(now.getTime() - 5 * dayMs + 3 * hourMs),
    },
  ];

  const shiftsData = dataset === 'demo' ? baseShifts.slice(0, 2) : baseShifts;

  await prisma.shift.createMany({ data: shiftsData, skipDuplicates: true });

  console.log(`  ✅ Created ${shiftsData.length} shifts`);
}

async function stageEvents(dataset: 'realistic' | 'demo' = 'realistic') {
  console.log("🎉 Creating events...");
  const now = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;

  const baseEvents = [
    {
      title: "Senior Dog Sunday",
      description: "Join us at the park for a special adoption event.",
      location: "Golden Gate Park, San Francisco, CA",
      startTime: new Date(now.getTime() + 10 * dayMs),
      endTime: new Date(now.getTime() + 10 * dayMs + 3 * hourMs),
      capacity: 75,
    },
    {
      title: "Annual Fundraiser Gala",
      description: "Our yearly gala to support our medical fund.",
      location: "The Fairmont Hotel, San Francisco, CA",
      startTime: new Date(now.getTime() + 30 * dayMs),
      endTime: new Date(now.getTime() + 30 * dayMs + 4 * hourMs),
      capacity: 150,
    },
  ];

  const eventsData = dataset === 'demo' ? baseEvents.slice(0, 1) : baseEvents;

  await prisma.event.createMany({ data: eventsData, skipDuplicates: true });

  console.log(`  ✅ Created ${eventsData.length} events`);
}

async function stageApplications(dataset: 'realistic' | 'demo' = 'realistic') {
  console.log("📝 Creating applications...");

  const volunteerLimit = dataset === 'demo' ? 2 : 5;
  const dogLimit = dataset === 'demo' ? 2 : 5;

  const volunteers = await prisma.profile.findMany({
    where: { role: UserRole.VOLUNTEER, email: { endsWith: '@snapshot.example.test' } },
    orderBy: { email: 'asc' },
    take: volunteerLimit,
  });

  const dogs = await prisma.dog.findMany({
    where: { status: DogStatus.AVAILABLE },
    orderBy: { id: 'asc' },
    take: dogLimit,
  });

  if (volunteers.length === 0 || dogs.length === 0) {
    console.warn("  ⚠️ Skipping application seeding: No volunteers or available dogs found.");
    return;
  }

  const [firstVolunteer, secondVolunteer, thirdVolunteer] = volunteers;
  const applicationsData: Prisma.ApplicationCreateManyInput[] = [
    {
      applicationType: AppType.ADOPTER,
      status: AppStatus.SUBMITTED,
      profileId: firstVolunteer.id,
      applicantName: firstVolunteer.name ?? "Test Applicant 1",
      applicantEmail: firstVolunteer.email,
      address: "123 Main St, San Francisco, CA",
      housingType: HousingType.OWN_HOME,
      hasYard: YardType.YES,
      yardFenced: true,
      reason: "Looking for a companion.",
      dogId: dogs[0].id,
    },
  ];

  if (secondVolunteer) {
    applicationsData.push({
      applicationType: AppType.FOSTER,
      status: AppStatus.APPROVED,
      profileId: secondVolunteer.id,
      applicantName: secondVolunteer.name ?? "Test Applicant 2",
      applicantEmail: secondVolunteer.email,
      address: "456 Oak St, Berkeley, CA",
      housingType: HousingType.RENT_APT_CONDO,
      hasYard: YardType.NO,
      yardFenced: false,
      reason: "I want to help dogs in need.",
    });
  }

  if (dataset !== 'demo' && thirdVolunteer) {
    applicationsData.push({
      applicationType: AppType.ADOPTER,
      status: AppStatus.IN_REVIEW,
      profileId: thirdVolunteer.id,
      applicantName: thirdVolunteer.name ?? "Test Applicant 3",
      applicantEmail: thirdVolunteer.email,
      address: "789 Pine St, Oakland, CA",
      housingType: HousingType.RENT_HOME,
      hasYard: YardType.SHARED,
      yardFenced: false,
      reason: "Interested in adopting a senior dog.",
      ...(dogs[1] ? { dogId: dogs[1].id } : {}),
    });
  }

  await prisma.application.createMany({ data: applicationsData, skipDuplicates: true });

  console.log(`  ✅ Created ${applicationsData.length} applications`);
}

export async function seedDevDatabase({ dataset = 'realistic' }: { dataset?: 'demo' | 'realistic' } = {}) {
  const startTime = Date.now();

  try {
    console.log("🌱 Starting development database seed...\n");

    console.log("🧹 Clearing existing seed data...");
    await prisma.applicationAudit.deleteMany();
    await prisma.application.deleteMany();
    await prisma.volunteerShiftSignup.deleteMany();
    await prisma.shift.deleteMany();
    await prisma.event.deleteMany();
    await prisma.dog.deleteMany();
    await prisma.fosterProfile.deleteMany({
      where: { profile: { email: { endsWith: '@snapshot.example.test' } } },
    });
    await prisma.profile.deleteMany({ where: { email: { endsWith: '@snapshot.example.test' } } });

    await stageDogs(dataset);
    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
    await stageVolunteers(dataset);
    await stageShifts(dataset);
    await stageEvents(dataset);
    await stageApplications(dataset);

    const duration = Date.now() - startTime;
    console.log(`✅ Development seed completed in ${duration}ms`);

    return { success: true, dataset };
  } catch (error) {
    console.error("❌ Development seeding failed:");
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
