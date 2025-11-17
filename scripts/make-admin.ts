#!/usr/bin/env tsx

import { UserRole } from '@prisma/client';
import { prisma } from '../lib/db';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function makeUserAdmin(userIdentifier: string) {
  try {
    console.log(`Making user admin: ${userIdentifier}`);

    // First, try to find the user by email or ID
    let profile;
    let supabaseUser;

    // Check if it's an email (contains @)
    if (userIdentifier.includes('@')) {
      // Find profile by email first
      profile = await prisma.profile.findUnique({
        where: { email: userIdentifier },
        select: { id: true, email: true, role: true, name: true }
      });

      // If no profile found, check if user exists in Supabase auth
      if (!profile) {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers();
        if (error) {
          console.error('Error fetching Supabase users:', error);
          process.exit(1);
        }

        supabaseUser = data.users.find(user => user.email === userIdentifier);
        if (!supabaseUser) {
          console.error(`User not found in Supabase auth: ${userIdentifier}`);
          process.exit(1);
        }
      }
    } else {
      // Assume it's a user ID - check both profile and supabase auth
      profile = await prisma.profile.findUnique({
        where: { id: userIdentifier },
        select: { id: true, email: true, role: true, name: true }
      });

      if (!profile) {
        // Check if user exists in Supabase auth
        const { data, error } = await supabaseAdmin.auth.admin.getUserById(userIdentifier);
        if (error || !data.user) {
          console.error(`User not found in Supabase auth: ${userIdentifier}`);
          process.exit(1);
        }
        supabaseUser = data.user;
      }
    }

    // If profile doesn't exist but Supabase user does, create the profile
    if (!profile && supabaseUser) {
      console.log(`Profile not found, creating profile for user: ${supabaseUser.email}`);

      profile = await prisma.profile.create({
        data: {
          id: supabaseUser.id,
          email: supabaseUser.email!,
          name: supabaseUser.user_metadata?.name || null,
          role: UserRole.VOLUNTEER, // Default role, will be updated to ADMIN below
        },
        select: { id: true, email: true, role: true, name: true }
      });

      console.log(`✅ Created profile for user: ${profile.email}`);
    }

    if (!profile) {
      console.error(`User not found: ${userIdentifier}`);
      process.exit(1);
    }

    console.log(`Found user: ${profile.email} (current role: ${profile.role})`);

    if (profile.role === UserRole.ADMIN) {
      console.log('User is already an admin!');
      return;
    }

    // Update the role in the database
    await prisma.profile.update({
      where: { id: profile.id },
      data: { role: UserRole.ADMIN },
    });

    // Update Supabase auth metadata to embed role in JWT tokens
    await supabaseAdmin.auth.admin.updateUserById(profile.id, {
      app_metadata: { role: UserRole.ADMIN }
    });

    console.log(`✅ Successfully promoted ${profile.email} to ADMIN role`);

  } catch (error) {
    console.error('Error making user admin:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Get user identifier from command line arguments
const userIdentifier = process.argv[2];

if (!userIdentifier) {
  console.error('Usage: tsx scripts/make-admin.ts <user-email-or-id>');
  console.error('Examples:');
  console.error('  tsx scripts/make-admin.ts admin@example.com');
  console.error('  tsx scripts/make-admin.ts 123e4567-e89b-12d3-a456-426614174000');
  process.exit(1);
}

makeUserAdmin(userIdentifier);
