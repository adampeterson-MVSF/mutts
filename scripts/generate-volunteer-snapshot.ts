import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';
import { UserRole, HousingType, YardType } from '@prisma/client';

interface VolunteerSnapshot {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  address?: string;
  housingType?: HousingType;
  hasYard?: YardType;
  yardFenced?: boolean;
  otherPets?: string;
  vetName?: string;
  vetPhone?: string;
  homeEnvironmentDescription?: string;
  isFoster?: boolean;
  fosterCapabilities?: {
    hasCats: boolean;
    hasDogs: boolean;
    canAdministerMeds: boolean;
    notes: string;
  };
}

// Generate realistic Bay Area addresses
function generateBayAreaAddress(): string {
  const cities = [
    'San Francisco, CA',
    'Oakland, CA',
    'Berkeley, CA',
    'San Jose, CA',
    'Palo Alto, CA',
    'Mountain View, CA',
    'Sunnyvale, CA',
    'Santa Clara, CA',
    'Fremont, CA',
    'Hayward, CA',
    'Concord, CA',
    'Walnut Creek, CA',
    'Pleasanton, CA',
    'Livermore, CA',
    'San Mateo, CA',
    'Redwood City, CA',
    'Burlingame, CA',
    'San Bruno, CA',
    'South San Francisco, CA',
    'Daly City, CA',
  ];

  const streets = [
    'Main St', 'Oak Ave', 'Pine St', 'Cedar Ln', 'Elm Dr', 'Maple Rd',
    'Washington St', 'Jefferson Ave', 'Lincoln Blvd', 'Roosevelt Way',
    'Park St', 'Hill Rd', 'Valley Dr', 'Ridge Ln', 'Creek Rd',
    'Sunset Blvd', 'Marina Ave', 'Bay St', 'Coast Hwy', 'Mountain View Rd'
  ];

  const city = faker.helpers.arrayElement(cities);
  const street = faker.helpers.arrayElement(streets);
  const number = faker.number.int({ min: 100, max: 9999 });

  return `${number} ${street}, ${city} ${faker.location.zipCode('#####')}`;
}

// Generate phone number
function generatePhoneNumber(): string {
  const areaCodes = ['415', '510', '650', '925', '408', '669', '341'];
  const areaCode = faker.helpers.arrayElement(areaCodes);
  const exchange = faker.string.numeric(3);
  const number = faker.string.numeric(4);
  return `(${areaCode}) ${exchange}-${number}`;
}

// Generate vet clinic names
function generateVetName(): string {
  const prefixes = ['Bay Area', 'Golden Gate', 'Silicon Valley', 'Peninsula', 'East Bay', 'South Bay', 'North Bay'];
  const types = ['Veterinary Hospital', 'Animal Clinic', 'Pet Hospital', 'Veterinary Center', 'Animal Medical Center'];
  const prefix = faker.helpers.arrayElement(prefixes);
  const type = faker.helpers.arrayElement(types);
  return `${prefix} ${type}`;
}

// Generate realistic volunteer profile
function generateVolunteer(): VolunteerSnapshot {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = `${firstName} ${lastName}`;
  const email = faker.internet.email({ firstName, lastName }).toLowerCase();

  // Determine if this volunteer is also a foster
  const isFoster = faker.datatype.boolean({ probability: 0.15 }); // 15% are fosters

  const housingType = faker.helpers.arrayElement([
    'OWN_HOME',
    'RENT_HOME',
    'OWN_APT_CONDO',
    'RENT_APT_CONDO',
    'OTHER'
  ] as HousingType[]);

  const hasYard = faker.helpers.arrayElement(['YES', 'NO', 'SHARED'] as YardType[]);

  // Yard details only make sense for homes
  const yardFenced = housingType.includes('HOME') && hasYard === 'YES'
    ? faker.datatype.boolean({ probability: 0.7 })
    : false;

  const otherPets = faker.datatype.boolean({ probability: 0.4 })
    ? faker.helpers.arrayElement([
        '1 cat', '2 cats', '1 dog', '2 dogs', '1 cat and 1 dog',
        '3 cats', '2 cats and 1 dog', 'No other pets but considering'
      ])
    : undefined;

  const homeDescriptions = [
    'Quiet suburban neighborhood with plenty of space',
    'Urban apartment in a pet-friendly building',
    'House with a large backyard and garden',
    'Condo with access to common areas',
    'Family home with children and other pets',
    'Senior living community that welcomes pets',
    'Townhouse in a peaceful cul-de-sac',
    'Loft apartment with city views',
    'House near parks and walking trails',
    'Apartment with balcony access'
  ];

  return {
    id: faker.string.uuid(),
    email,
    name,
    role: UserRole.VOLUNTEER,
    phone: generatePhoneNumber(),
    address: generateBayAreaAddress(),
    housingType,
    hasYard,
    yardFenced,
    otherPets,
    vetName: generateVetName(),
    vetPhone: generatePhoneNumber(),
    homeEnvironmentDescription: faker.helpers.arrayElement(homeDescriptions),
    isFoster,
    fosterCapabilities: isFoster ? {
      hasCats: faker.datatype.boolean({ probability: 0.6 }),
      hasDogs: faker.datatype.boolean({ probability: 0.8 }),
      canAdministerMeds: faker.datatype.boolean({ probability: 0.5 }),
      notes: faker.helpers.arrayElement([
        'Experienced foster parent with 3+ years of experience',
        'New to fostering but very enthusiastic',
        'Have fostered multiple dogs successfully',
        'Specialize in senior dog fostering',
        'Can handle special needs dogs',
        'Focus on puppies and young dogs',
        'Available for short-term emergency fosters'
      ])
    } : undefined
  };
}

async function main() {
  const count = 100; // Generate 100 volunteers (between 60-120 as requested)

  console.log(`Generating ${count} realistic volunteer profiles...`);

  const volunteers: VolunteerSnapshot[] = [];

  for (let i = 0; i < count; i++) {
    volunteers.push(generateVolunteer());
  }

  // Generate date-based filename
  const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const filename = `volunteers.${date}.json`;
  const outputPath = path.join('prisma', 'seed-snapshots', filename);

  // Write snapshot to file
  fs.writeFileSync(outputPath, JSON.stringify(volunteers, null, 2));

  console.log(`Generated ${volunteers.length} volunteer snapshots in ${outputPath}`);

  // Summary
  const fosters = volunteers.filter(v => v.isFoster).length;
  const withPhones = volunteers.filter(v => v.phone).length;
  const withAddresses = volunteers.filter(v => v.address).length;

  console.log('Summary:');
  console.log(`  Total volunteers: ${volunteers.length}`);
  console.log(`  Foster volunteers: ${fosters} (${Math.round((fosters / volunteers.length) * 100)}%)`);
  console.log(`  With phone numbers: ${withPhones} (${Math.round((withPhones / volunteers.length) * 100)}%)`);
  console.log(`  With addresses: ${withAddresses} (${Math.round((withAddresses / volunteers.length) * 100)}%)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
