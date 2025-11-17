#!/usr/bin/env node
// scripts/launch-gate-check.mjs
//
// Automated launch gate verification script
// Runs all critical checks before production deployment

import { execSync } from 'child_process';
import fs from 'fs';

const CHECKS = {
  security: [],
  performance: [],
  testing: [],
  infrastructure: []
};

let allPassed = true;

function log(message, status = 'info') {
  const icons = {
    pass: '✅',
    fail: '❌',
    warn: '⚠️',
    info: 'ℹ️'
  };
  console.log(`${icons[status] || icons.info} ${message}`);
}

function addCheck(category, name, passed, details = '') {
  CHECKS[category].push({ name, passed, details });
  if (!passed) allPassed = false;
  log(`${category.toUpperCase()}: ${name}`, passed ? 'pass' : 'fail');
  if (details) console.log(`   ${details}`);
}

// Security Checks
function checkSecurity() {
  log('🔒 Running security checks...');

  // Environment validation
  try {
    execSync('npm run build:env', { stdio: 'pipe' });
    addCheck('security', 'Environment validation', true);
  } catch {
    addCheck('security', 'Environment validation', false, 'Missing or invalid environment variables');
  }

  // Dependency audit
  try {
    execSync('npm audit --audit-level high', { stdio: 'pipe' });
    addCheck('security', 'Dependency audit', true);
  } catch {
    addCheck('security', 'Dependency audit', false, 'High-severity vulnerabilities found');
  }

  // Lockfile integrity
  try {
    execSync('npm ci --ignore-scripts', { stdio: 'pipe' });
    addCheck('security', 'Lockfile integrity', true);
  } catch {
    addCheck('security', 'Lockfile integrity', false, 'Lockfile out of sync');
  }

  // Type checking
  try {
    execSync('npx tsc --noEmit', { stdio: 'pipe' });
    addCheck('security', 'TypeScript compilation', true);
  } catch {
    addCheck('security', 'TypeScript compilation', false, 'Type errors found');
  }
}

// Performance Checks
function checkPerformance() {
  log('📊 Running performance checks...');

  // Build check
  try {
    execSync('npm run build', { stdio: 'pipe' });
    addCheck('performance', 'Production build', true);
  } catch {
    addCheck('performance', 'Production build', false, 'Build failed');
  }

  // Bundle size check (basic)
  if (fs.existsSync('.next')) {
    const stats = fs.statSync('.next');
    const sizeMB = stats.size / (1024 * 1024);
    if (sizeMB < 50) { // Arbitrary threshold
      addCheck('performance', 'Bundle size', true, `~${sizeMB.toFixed(1)}MB`);
    } else {
      addCheck('performance', 'Bundle size', false, `Bundle too large: ${sizeMB.toFixed(1)}MB`);
    }
  }
}

// Testing Checks
function checkTesting() {
  log('🧪 Running testing checks...');

  // Unit tests
  try {
    execSync('npm run test:run', { stdio: 'pipe' });
    addCheck('testing', 'Unit tests', true);
  } catch {
    addCheck('testing', 'Unit tests', false, 'Unit tests failed');
  }

  // Linting
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    addCheck('testing', 'Code linting', true);
  } catch {
    addCheck('testing', 'Code linting', false, 'Linting errors found');
  }
}

// Infrastructure Checks
function checkInfrastructure() {
  log('🏗️ Running infrastructure checks...');

  // Database connectivity (if DATABASE_URL is set)
  if (process.env.DATABASE_URL) {
    try {
      execSync('npx prisma db push --preview-feature', { stdio: 'pipe' });
      addCheck('infrastructure', 'Database connectivity', true);
    } catch {
      addCheck('infrastructure', 'Database connectivity', false, 'Cannot connect to database');
    }
  } else {
    addCheck('infrastructure', 'Database connectivity', false, 'DATABASE_URL not set');
  }

  // Required files exist
  const requiredFiles = [
    'prisma/schema.prisma',
    'lib/env.ts',
    'middleware.ts',
    'package.json'
  ];

  for (const file of requiredFiles) {
    if (fs.existsSync(file)) {
      addCheck('infrastructure', `Required file: ${file}`, true);
    } else {
      addCheck('infrastructure', `Required file: ${file}`, false, 'File missing');
    }
  }
}

// Generate report
function generateReport() {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 LAUNCH GATE CHECK REPORT');
  console.log('='.repeat(60));

  for (const [category, checks] of Object.entries(CHECKS)) {
    console.log(`\n${category.toUpperCase()}:`);
    for (const check of checks) {
      const status = check.passed ? '✅ PASS' : '❌ FAIL';
      console.log(`  ${status} ${check.name}`);
      if (check.details) console.log(`      ${check.details}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  if (allPassed) {
    console.log('🎉 ALL CHECKS PASSED - READY FOR LAUNCH!');
    console.log('✅ Proceed with deployment');
  } else {
    console.log('🚨 CHECKS FAILED - DO NOT LAUNCH!');
    console.log('❌ Fix failing checks before deployment');
    process.exit(1);
  }
  console.log('='.repeat(60));
}

// Main execution
async function main() {
  console.log('🚀 Launch Gate Verification Starting...\n');

  checkSecurity();
  checkPerformance();
  checkTesting();
  checkInfrastructure();

  generateReport();
}

main().catch(error => {
  console.error('Launch gate check failed:', error);
  process.exit(1);
});
