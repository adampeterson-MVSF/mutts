#!/usr/bin/env node
// scripts/smoke-check.mjs
//
// Smoke tests for disaster recovery validation
// Verifies that critical application functionality works after restore

import { execSync } from 'child_process';
import http from 'http';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const TIMEOUT_MS = 30000; // 30 seconds

console.log('🧪 Running DR smoke tests...');
console.log(`Target: ${BASE_URL}`);

// Test results
const results = {
  timestamp: new Date().toISOString(),
  tests: [],
  passed: 0,
  failed: 0,
  total: 0
};

function log(message, status = 'info') {
  const prefix = status === 'pass' ? '✅' : status === 'fail' ? '❌' : 'ℹ️ ';
  console.log(`${prefix} ${message}`);
}

function addTest(name, passed, error = null) {
  results.tests.push({
    name,
    passed,
    error: error?.message || null,
    timestamp: new Date().toISOString()
  });

  results.total++;
  if (passed) {
    results.passed++;
    log(name, 'pass');
  } else {
    results.failed++;
    log(`${name}: ${error?.message}`, 'fail');
  }
}

// HTTP request helper
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, {
      method: 'GET',
      timeout: TIMEOUT_MS,
      ...options
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Database connectivity test
async function testDatabaseConnectivity() {
  try {
    // Test Prisma connection
    execSync('npx prisma db execute --file scripts/smoke-db-test.sql', {
      stdio: 'pipe',
      timeout: 10000
    });
    return true;
  } catch (error) {
    throw new Error(`Database connectivity failed: ${error.message}`);
  }
}

// API smoke tests
async function runSmokeTests() {
  const tests = [
    // Basic health check
    {
      name: 'Health check endpoint',
      url: `${BASE_URL}/api/test`,
      validate: (response) => {
        if (response.status !== 200) {
          throw new Error(`Expected 200, got ${response.status}`);
        }
        return true;
      }
    },

    // Authentication system
    {
      name: 'Public ping endpoint',
      url: `${BASE_URL}/api/public/ping`,
      validate: (response) => {
        if (response.status !== 200) {
          throw new Error(`Expected 200, got ${response.status}`);
        }
        const data = JSON.parse(response.body);
        if (!data.message) {
          throw new Error('Missing message in response');
        }
        return true;
      }
    },

    // Static asset loading
    {
      name: 'Static asset loading',
      url: `${BASE_URL}/favicon.ico`,
      validate: (response) => {
        if (response.status !== 200) {
          throw new Error(`Expected 200, got ${response.status}`);
        }
        return true;
      }
    },

    // Application data integrity
    {
      name: 'Application data exists',
      url: `${BASE_URL}/api/test-api/list-users`,
      headers: {
        'x-test-secret': process.env.TEST_SECRET || 'test-secret-default'
      },
      validate: (response) => {
        if (response.status !== 200) {
          throw new Error(`Expected 200, got ${response.status}`);
        }
        const data = JSON.parse(response.body);
        if (!Array.isArray(data.users)) {
          throw new Error('Expected users array in response');
        }
        return true;
      }
    }
  ];

  for (const test of tests) {
    try {
      const response = await makeRequest(test.url, {
        headers: test.headers || {}
      });
      test.validate(response);
      addTest(test.name, true);
    } catch (error) {
      addTest(test.name, false, error);
    }
  }
}

// Main execution
async function main() {
  try {
    // Test database connectivity first
    await testDatabaseConnectivity();
    addTest('Database connectivity', true);

    // Run API smoke tests
    await runSmokeTests();

    // Summary
    console.log('\n📊 Smoke Test Results:');
    console.log(`Total: ${results.total}`);
    console.log(`Passed: ${results.passed}`);
    console.log(`Failed: ${results.failed}`);

    if (results.failed > 0) {
      console.log('\n❌ Smoke tests failed!');
      process.exit(1);
    } else {
      console.log('\n✅ All smoke tests passed!');
    }

  } catch (error) {
    addTest('Smoke test execution', false, error);
    console.log('\n❌ Smoke tests failed!');
    process.exit(1);
  }
}

// Run the tests
main().catch(error => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
