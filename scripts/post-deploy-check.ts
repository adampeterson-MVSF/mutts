#!/usr/bin/env tsx
/**
 * Post-Deploy Checklist Script
 * 
 * Validates critical security and configuration after deployment.
 * Returns exit code 0 if all checks pass, 1 if any fail.
 * Intended for CI/CD pipeline integration.
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; // For admin operations

interface Check {
  name: string;
  check: () => Promise<boolean>;
  errorMessage: string;
}

async function main() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('❌ Missing required environment variables: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY');
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY || SUPABASE_ANON_KEY);

  const checks: Check[] = [
    {
      name: 'Medical documents bucket exists',
      check: async () => {
        const { data, error } = await supabase.storage.listBuckets();
        if (error) {
          console.error(`   Error checking buckets: ${error.message}`);
          return false;
        }
        return data?.some(bucket => bucket.name === 'medical-documents') ?? false;
      },
      errorMessage: 'Medical documents bucket not found',
    },
    {
      name: 'Medical documents bucket is private',
      check: async () => {
        const { data, error } = await supabase.storage.getBucket('medical-documents');
        if (error) {
          console.error(`   Error checking bucket privacy: ${error.message}`);
          return false;
        }
        // Bucket should be private (public: false)
        return data?.public === false;
      },
      errorMessage: 'Medical documents bucket is public (should be private)',
    },
    {
      name: 'Signed URL generation works',
      check: async () => {
        // Create a test file
        const testPath = 'post-deploy-check/test.txt';
        const testContent = 'test';
        
        const { error: uploadError } = await supabase.storage
          .from('medical-documents')
          .upload(testPath, testContent, { upsert: true });
        
        if (uploadError) {
          console.error(`   Error uploading test file: ${uploadError.message}`);
          return false;
        }

        // Try to generate signed URL
        const { data: signedUrlData, error: signedUrlError } = await supabase.storage
          .from('medical-documents')
          .createSignedUrl(testPath, 60); // 1 minute TTL

        // Clean up test file
        await supabase.storage.from('medical-documents').remove([testPath]);

        if (signedUrlError || !signedUrlData?.signedUrl) {
          console.error(`   Error generating signed URL: ${signedUrlError?.message || 'Unknown'}`);
          return false;
        }

        // Verify URL is accessible (HEAD request)
        try {
          const response = await fetch(signedUrlData.signedUrl, { method: 'HEAD' });
          return response.ok;
        } catch {
          return false;
        }
      },
      errorMessage: 'Signed URL generation or access failed',
    },
  ];

  console.log('Running post-deploy checklist...\n');

  const results: Array<{ name: string; passed: boolean; error?: string }> = [];

  for (const check of checks) {
    try {
      const passed = await check.check();
      results.push({ name: check.name, passed, error: passed ? undefined : check.errorMessage });
      const icon = passed ? '✅' : '❌';
      console.log(`${icon} ${check.name}`);
      if (!passed) {
        console.log(`   ${check.errorMessage}`);
      }
    } catch (error) {
      results.push({ 
        name: check.name, 
        passed: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
      console.log(`❌ ${check.name}`);
      console.log(`   Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  console.log('\n' + '='.repeat(50));
  const failures = results.filter(r => !r.passed);
  const passed = results.filter(r => r.passed);

  console.log(`\nSummary: ${passed.length}/${results.length} checks passed`);

  if (failures.length > 0) {
    console.log(`\n❌ ${failures.length} check(s) failed:`);
    failures.forEach(f => {
      console.log(`   - ${f.name}: ${f.error}`);
    });
    console.log('\n⚠️  Deployment validation failed. Review bucket privacy settings.');
    process.exit(1);
  }

  console.log('\n✅ All post-deploy checks passed!');
  process.exit(0);
}

main()
  .catch((error) => {
    console.error('Post-deploy check script error:', error);
    process.exit(1);
  });

