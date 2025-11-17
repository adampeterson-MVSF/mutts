#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the CSV file
const csvPath = path.join(__dirname, 'muttville_available_mutts_all_46_partial_details.csv');
const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.trim().split('\n');

// Parse CSV headers and data
const headers = lines[0].split(',');
const rows = lines.slice(1).map(line => line.split(','));

const stats = {
  processed: 0,
  updated: 0,
  skipped: 0,
  missingUrls: 0,
  fetchErrors: 0,
  parseWarnings: 0,
};

// Function to make HTTPS request
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        reject(new Error(`Request to ${url} failed with status ${res.statusCode}`));
        res.resume();
        return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Function to get all available dog URLs from the main page
async function getDogUrls() {
  console.log('Fetching available mutts page...');
  const html = await fetchPage('https://muttville.org/available_mutts');
  const urlMatches = html.match(/href="\/mutt\/[^"]*"/g) || [];
  const urls = urlMatches
    .map(match => match.replace('href="', '').replace('"', ''))
    .filter(url => url.includes('-') && !url.includes('?')) // Filter valid dog URLs
    .map(url => `https://muttville.org${url}`);

  console.log(`Found ${urls.length} dog URLs`);
  return urls;
}

// Function to parse dog data from HTML
function parseDogData(html, dogName) {
  const data = {};
  const warnings = [];

  try {
    const metaDescMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i);
    if (metaDescMatch) {
      const desc = metaDescMatch[1];
      console.log(`Meta description for ${dogName}: ${desc}`);

      const breedMatch = desc.match(/^([^|]+)\s*\|\s*/);
      if (breedMatch) {
        data.breed = breedMatch[1].trim();
      } else {
        warnings.push('breed missing in meta description');
      }

      const genderMatch = desc.match(/\|\s*([^|]+)\s*\|\s*/);
      if (genderMatch) {
        data.gender = genderMatch[1].trim();
      } else {
        warnings.push('gender missing in meta description');
      }

      const sizeMatch = desc.match(/\|\s*Size:\s*([^(|]+)\s*\(/);
      if (sizeMatch) {
        data.size = sizeMatch[1].trim().toLowerCase();
      } else {
        warnings.push('size missing in meta description');
      }

      const weightMatch = desc.match(/\((\d+)-(\d+)\s*lbs\)/) || desc.match(/\((\d+)\s*lbs\)/);
      if (weightMatch) {
        if (weightMatch[2]) {
          const min = parseInt(weightMatch[1]);
          const max = parseInt(weightMatch[2]);
          data.weight_lbs = Math.round((min + max) / 2).toString();
        } else {
          data.weight_lbs = weightMatch[1];
        }
      } else {
        warnings.push('weight missing in meta description');
      }
    } else {
      warnings.push('meta description missing');
    }

    const ageMatch = html.match(/about (\d+) years? old/i) ||
                    html.match(/(\d+) years? old/i) ||
                    html.match(/(\d+)\s*years?/i);
    if (ageMatch) {
      data.est_age_years = ageMatch[1];
    } else {
      warnings.push('age not found in page content');
    }

    const bioMatch = html.match(/<p class="firstparagraph">([^<]+)<\/p>/i) ||
                    html.match(/<div class="article-content[^"]*">[^<]*<p[^>]*>([^<]+)<\/p>/i);
    if (bioMatch) {
      data.bio = bioMatch[1]
        .replace(/&#8217;/g, "'")
        .replace(/&#\d+;/g, "'")
        .trim();
    } else {
      warnings.push('bio paragraph missing');
    }

    const photoMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*muttville\.org[^"]*images[^"]*)"[^>]*>/i);
    if (photoMatch) {
      data.photo_hero_url = photoMatch[1];
    } else {
      warnings.push('photo URL missing');
    }

    console.log(`Parsed data for ${dogName}:`, data);
  } catch (error) {
    console.error(`Error parsing data for ${dogName}:`, error.message);
    warnings.push(error.message);
  }

  return { data, warnings };
}

// Process each dog
async function processDogs() {
  // First, get all available dog URLs
  const dogUrls = await getDogUrls();

  // Create a map of dog name to URL
  const dogUrlMap = {};
  dogUrls.forEach(url => {
    const match = url.match(/\/mutt\/([^-]+(?:-[^-]+)*)-(\d+)/);
    if (match) {
      const nameSlug = match[1];
      // Convert slug back to name format
      const dogName = nameSlug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      dogUrlMap[dogName] = url;
    }
  });

  console.log('Dog URL map:', Object.keys(dogUrlMap));

  const updatedRows = [];
  let processedCount = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = [...rows[i]]; // Copy the row
    const dogName = row[0];

    // Skip if row is empty or just a newline
    if (!dogName || dogName.trim() === '') {
      updatedRows.push(row);
      continue;
    }

    stats.processed++;

    console.log(`Processing ${dogName}...`);

    // Check if this dog needs data (has empty fields)
    const hasEmptyFields = row.slice(1, 9).some(field => field === '' || field === undefined);

    if (hasEmptyFields && dogUrlMap[dogName]) {
      const url = dogUrlMap[dogName];

      try {
        console.log(`Fetching ${url}...`);
        const html = await fetchPage(url);

        if (html.includes('404') || html.includes('not found') || html.length < 1000) {
          console.log(`Page not found or invalid for ${dogName}`);
          stats.parseWarnings++;
        } else {
          const { data, warnings } = parseDogData(html, dogName);

          // Update row with scraped data
          let updated = false;
          Object.keys(data).forEach(key => {
            const index = headers.indexOf(key);
            if (index !== -1 && (row[index] === '' || row[index] === undefined) && data[key]) {
              row[index] = data[key];
              updated = true;
            }
          });

          if (warnings.length) {
            warnings.forEach(message => console.warn(`[SCRAPER] ${dogName}: ${message}`));
            stats.parseWarnings += warnings.length;
          }

          if (updated) {
            stats.updated++;
          }
        }
      } catch (error) {
        console.error(`Error fetching data for ${dogName}:`, error.message);
        stats.fetchErrors++;
      }
    } else if (!dogUrlMap[dogName]) {
      console.log(`No URL found for ${dogName} - dog may not be available`);
      stats.missingUrls++;
    } else {
      stats.skipped++;
    }

    updatedRows.push(row);
    processedCount++;

    // Add delay to be respectful to the server
    if (processedCount % 5 === 0) {
      console.log('Pausing for 2 seconds...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Write updated CSV
  const updatedCsv = [headers.join(',')];
  updatedRows.forEach(row => {
    updatedCsv.push(row.map(cell => {
      // Escape commas and quotes in cells
      if (cell && (cell.includes(',') || cell.includes('"') || cell.includes('\n'))) {
        return `"${cell.replace(/"/g, '""')}"`;
      }
      return cell || '';
    }).join(','));
  });

  fs.writeFileSync(csvPath, updatedCsv.join('\n') + '\n');
  console.log('CSV updated successfully!');
  console.log('[SCRAPER] Summary:', {
    processed: stats.processed,
    updated: stats.updated,
    skipped: stats.skipped,
    missingUrls: stats.missingUrls,
    fetchErrors: stats.fetchErrors,
    parseWarnings: stats.parseWarnings,
  });
}

// Run the script
processDogs().catch(console.error);
