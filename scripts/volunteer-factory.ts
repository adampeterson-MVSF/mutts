#!/usr/bin/env tsx

import { writeFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';
import { UserRole } from '@prisma/client';

// Use seedrandom for deterministic generation
// eslint-disable-next-line @typescript-eslint/no-require-imports
const seedrandom = require('seedrandom');

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;
  preferences: {
    weekdayAvailability: boolean;
    weekendAvailability: boolean;
    morningAvailability: boolean;
    afternoonAvailability: boolean;
  };
  flags: {
    trainingComplete: boolean;
    fosterApproved: boolean;
  };
  role: 'VOLUNTEER' | 'STAFF' | 'ADMIN';
}

const FIRST_NAMES = [
  'Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry',
  'Ivy', 'Jack', 'Kate', 'Liam', 'Maya', 'Noah', 'Olivia', 'Parker',
  'Quinn', 'Ryan', 'Sara', 'Tyler', 'Uma', 'Victor', 'Wendy', 'Xavier',
  'Yara', 'Zoe', 'Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley'
];

const LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
  'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez',
  'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark',
  'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King'
];

const CITIES = [
  'San Francisco', 'Oakland', 'Berkeley', 'San Jose', 'Palo Alto',
  'Mountain View', 'Sunnyvale', 'Fremont', 'Hayward', 'Concord',
  'Walnut Creek', 'Pleasanton', 'Livermore', 'Dublin', 'San Ramon'
];

const STATES = ['CA'];

function generatePhone(rng: () => number): string {
  const area = Math.floor(rng() * 900) + 100;
  const exchange = Math.floor(rng() * 900) + 100;
  const number = Math.floor(rng() * 9000) + 1000;
  return `(${area}) ${exchange}-${number}`;
}

function generateZip(rng: () => number): string {
  return (Math.floor(rng() * 90000) + 10000).toString();
}

function slug(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function twoDigits(n: number) { 
  return n.toString().padStart(2, '0'); 
}

/** deterministic but unique per index; domain reserved for snapshot tests */
export function makeVolunteerEmail(name: string, idx: number) {
  const base = slug(name) || 'volunteer';
  // add short hash for future-proofing if order changes
  const h = createHash('sha1').update(`${base}:${idx}`).digest('hex').slice(0,6);
  return `${base}+v${twoDigits(idx)}-${h}@snapshot.example.test`;
}

function generateVolunteer(rng: () => number, role: UserRole, index: number): Volunteer {
  const firstName = FIRST_NAMES[Math.floor(rng() * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(rng() * LAST_NAMES.length)];
  const city = CITIES[Math.floor(rng() * CITIES.length)];
  const state = STATES[Math.floor(rng() * STATES.length)];

  // Generate preferences based on role and randomness
  const preferences = {
    weekdayAvailability: rng() > 0.3, // 70% have weekday availability
    weekendAvailability: rng() > 0.4, // 60% have weekend availability
    morningAvailability: rng() > 0.2, // 80% have morning availability
    afternoonAvailability: rng() > 0.2, // 80% have afternoon availability
  };

  // Flags based on role and experience
  const flags = {
    trainingComplete: role === 'ADMIN' || rng() > 0.1, // 90% complete training, all admins do
    fosterApproved: role === 'ADMIN' || (role === 'STAFF' && rng() > 0.2) || (role === 'VOLUNTEER' && rng() > 0.7), // More likely for staff/admins
  };

  const name = `${firstName} ${lastName}`;
  return {
    id: `volunteer-${index + 1}`,
    name,
    email: makeVolunteerEmail(name, index),
    phone: generatePhone(rng),
    city,
    state,
    zipCode: generateZip(rng),
    preferences,
    flags,
    role,
  };
}

function main() {
  console.log('Generating deterministic volunteers...');

  // Use fixed seed for reproducibility
  const rng = seedrandom('muttville-volunteers-2025-10');

  const volunteers: Volunteer[] = [];

  // Generate roles: ~80 VOLUNTEER, ~15 STAFF, ~5 ADMIN
  const roleCounts = { VOLUNTEER: 80, STAFF: 15, ADMIN: 5 };

  let index = 0;
  for (const [role, count] of Object.entries(roleCounts)) {
    for (let i = 0; i < count; i++) {
      volunteers.push(generateVolunteer(rng, role as UserRole, index++));
    }
  }

  // Create snapshot
  const today = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const snapshot = {
    generatedAt: new Date().toISOString(),
    summary: {
      total: volunteers.length,
      volunteers: volunteers.filter(v => v.role === 'VOLUNTEER').length,
      staff: volunteers.filter(v => v.role === 'STAFF').length,
      admins: volunteers.filter(v => v.role === 'ADMIN').length,
      trained: volunteers.filter(v => v.flags.trainingComplete).length,
      fosterApproved: volunteers.filter(v => v.flags.fosterApproved).length,
    },
    volunteers,
  };

  const snapshotPath = join('prisma', 'seed-snapshots', `volunteers.${today}.json`);
  writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2));

  console.log(`Wrote volunteer snapshot to: ${snapshotPath}`);
  console.log('Summary:', snapshot.summary);

  // Show first few examples
  console.log('\nFirst 5 volunteers:');
  volunteers.slice(0, 5).forEach(v => {
    console.log(`- ${v.name} (${v.role}) - ${v.email}`);
  });

  console.log('\nFirst 3 staff:');
  volunteers.filter(v => v.role === 'STAFF').slice(0, 3).forEach(v => {
    console.log(`- ${v.name} (${v.role}) - ${v.email}`);
  });

  console.log('\nAdmins:');
  volunteers.filter(v => v.role === 'ADMIN').forEach(v => {
    console.log(`- ${v.name} (${v.role}) - ${v.email}`);
  });

  console.log('✅ Volunteer generation completed successfully');
}

main();