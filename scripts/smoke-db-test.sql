-- scripts/smoke-db-test.sql
-- Simple database connectivity and integrity test for DR validation

-- Test basic connectivity
SELECT 1 as connectivity_test;

-- Test that core tables exist and have expected structure
SELECT
  COUNT(*) as profile_count
FROM "Profile"
WHERE "deletedAt" IS NULL;

-- Test that we have at least some seed data
SELECT
  COUNT(*) as dog_count
FROM "Dog";

-- Test referential integrity
SELECT
  COUNT(*) as valid_applications
FROM "Application" a
WHERE EXISTS (
  SELECT 1 FROM "Profile" p WHERE p.id = a."profileId"
);
