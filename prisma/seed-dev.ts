import { seedDevDatabase } from "./seed-helpers";

/**
 * Export the seed function for test API to use
 */
export const seed = seedDevDatabase;

/**
 * Thin wrapper script for development database seeding.
 * Parse environment, call seedDevDatabase from seed-helpers.ts, and log summary.
 */
async function main() {
  // Parse dataset from command line args or default to 'realistic'
  const dataset = process.argv[2] === 'demo' ? 'demo' : 'realistic';

  try {
    await seedDevDatabase({ dataset });
    console.log(`\nSeeded ${dataset} dataset successfully`);
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

// Only run main if this file is executed directly (not imported)
if (require.main === module) {
  main();
}