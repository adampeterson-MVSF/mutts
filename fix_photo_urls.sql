-- fix_photo_urls.sql
-- SQL script to fix photo URLs in the database
-- This complements the TypeScript script but can be run directly on the database

-- First, let's see what URLs we have
SELECT
  COUNT(*) as total_dogs,
  COUNT(CASE WHEN primary_photo_url IS NOT NULL AND primary_photo_url != '' THEN 1 END) as with_photos,
  COUNT(CASE WHEN primary_photo_url LIKE '%placeholder.com%' THEN 1 END) as placeholder_urls,
  COUNT(CASE WHEN primary_photo_url LIKE '%muttville.org%' THEN 1 END) as muttville_urls,
  COUNT(CASE WHEN primary_photo_url LIKE '%"%' OR primary_photo_url LIKE '%\%%22%' THEN 1 END) as encoded_quotes
FROM dogs;

-- Extract unique hosts from photo URLs for allowlist
SELECT DISTINCT
  CASE
    WHEN primary_photo_url LIKE 'http%' THEN
      SUBSTRING(primary_photo_url FROM 'https?://([^/]+)')
    ELSE NULL
  END as hostname
FROM dogs
WHERE primary_photo_url IS NOT NULL
  AND primary_photo_url != ''
  AND primary_photo_url NOT LIKE 'data:%' -- Exclude data URIs
ORDER BY hostname;

-- Fix URL-encoded quotes (%22)
UPDATE dogs
SET primary_photo_url = REPLACE(primary_photo_url, '%22', '')
WHERE primary_photo_url LIKE '%\%%22%'
  AND primary_photo_url IS NOT NULL;

-- Replace placeholder service URLs with our placeholder
UPDATE dogs
SET primary_photo_url = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui,Arial" font-size="24" fill="#666">No Photo</text></svg>'
WHERE primary_photo_url LIKE '%placeholder.com%'
   OR primary_photo_url LIKE '%via.placeholder.com%';

-- Clean up URLs with surrounding quotes
UPDATE dogs
SET primary_photo_url = TRIM(BOTH '"' FROM primary_photo_url)
WHERE primary_photo_url LIKE '"%"'
  AND primary_photo_url IS NOT NULL;

-- Verify the fixes
SELECT
  COUNT(*) as total_dogs,
  COUNT(CASE WHEN primary_photo_url IS NOT NULL AND primary_photo_url != '' THEN 1 END) as with_photos,
  COUNT(CASE WHEN primary_photo_url LIKE '%placeholder.com%' THEN 1 END) as remaining_placeholders,
  COUNT(CASE WHEN primary_photo_url LIKE '%muttville.org%' THEN 1 END) as muttville_urls,
  COUNT(CASE WHEN primary_photo_url LIKE '%"%' OR primary_photo_url LIKE '%\%%22%' THEN 1 END) as remaining_encoded_quotes
FROM dogs;