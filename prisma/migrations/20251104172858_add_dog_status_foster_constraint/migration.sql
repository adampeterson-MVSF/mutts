-- Add CHECK constraint to ensure IN_FOSTER status requires foster_profile_id
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_status_foster_check"
  CHECK (status != 'IN_FOSTER' OR foster_profile_id IS NOT NULL);