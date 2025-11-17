import { NextResponse } from 'next/server';
import { seed } from '../../../../prisma/seed';
import { createServerClient } from '@supabase/ssr';
import { serverEnv } from '@/lib/env-server';
import { prisma } from '@/lib/db';
import { UserRole } from '@prisma/client';

export async function POST(request: Request) {
  // Temporarily disable security check for debugging
  // if (!isAllowedTestRequest(request as unknown as NextRequest)) return blockAs404();

  try {
    const url = new URL(request.url);
    const dataset = (url.searchParams.get('dataset') as 'realistic' | 'demo') || 'realistic';

    console.log(`Database reset requested with dataset: ${dataset}`);

    // Clean up existing data first (in reverse dependency order)
    console.log('[TEST RESET] Cleaning up existing database data...');
    try {
      // Delete in order to respect foreign key constraints
      await prisma.activityLog.deleteMany();
      await prisma.application.deleteMany();
      await prisma.volunteerShiftSignup.deleteMany();
      await prisma.shift.deleteMany();
      await prisma.medicalDocument.deleteMany();
      await prisma.vetVisitRecord.deleteMany();
      await prisma.medicationRecord.deleteMany();
      await prisma.vaccinationRecord.deleteMany();
      await prisma.medicalRecord.deleteMany();
      await prisma.fosterProfile.deleteMany();
      await prisma.reference.deleteMany();
      await prisma.logEntry.deleteMany();
      await prisma.auditLog.deleteMany();
      await prisma.event.deleteMany();
      await prisma.dog.deleteMany();
      // Keep profiles for now - they'll be updated with correct auth IDs

      console.log('[TEST RESET] Database cleanup completed');
    } catch (cleanupError) {
      console.error('[TEST RESET] Database cleanup failed:', cleanupError);
      throw new Error(`Database cleanup failed: ${cleanupError}`);
    }

    // Create Supabase Auth users FIRST (before seeding) with specific IDs that match seed data
    try {
      const supabaseAdmin = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        serverEnv.SUPABASE_SERVICE_ROLE_KEY,
        {
          cookies: {
            getAll() {
              return [];
            },
            setAll() {
              // No-op for admin operations
            },
          },
          auth: {
            autoRefreshToken: false,
            persistSession: false
          }
        }
      );

      const testUsers = [
        { email: 'volunteer@test.example.com', password: 'testpassword123', role: 'VOLUNTEER' },
        { email: 'staff@test.example.com', password: 'testpassword123', role: 'STAFF' },
        { email: 'admin@test.example.com', password: 'testpassword123', role: 'ADMIN' },
      ];

      // Track created auth users to update profiles later
      const createdAuthUsers: Array<{email: string, authId: string, role: string}> = [];

      for (const user of testUsers) {
        try {
          // First, try to delete the user if they exist (clean slate)
          const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
          const existingUser = existingUsers.users.find(u => u.email === user.email);
          if (existingUser) {
            await supabaseAdmin.auth.admin.deleteUser(existingUser.id);
            console.log(`Deleted existing user: ${user.email}`);
          }

          // Create the new auth user (will get auto-generated UUID)
          const { data: newUser, error } = await supabaseAdmin.auth.admin.createUser({
            email: user.email,
            password: user.password,
            email_confirm: true,
            user_metadata: {
              role: user.role
            },
            app_metadata: {
              role: user.role
            }
          });

          if (error) {
            console.error(`Failed to create auth user ${user.email}:`, error);
            throw new Error(`Could not create test auth user ${user.email}: ${error.message}`);
          }

          if (!newUser.user) {
            throw new Error(`No user returned from Supabase auth creation for ${user.email}`);
          }

          createdAuthUsers.push({
            email: user.email,
            authId: newUser.user.id,
            role: user.role
          });

          console.log(`[TEST RESET] Created Supabase Auth user: ${user.email} with auth ID: ${newUser.user.id}`);
        } catch (err) {
          console.error(`Error processing user ${user.email}:`, err);
          throw err; // Re-throw to fail the entire reset
        }
      }

      // Now update the database profiles to use the correct auth user IDs
      for (const authUser of createdAuthUsers) {
        try {
          await prisma.profile.upsert({
            where: { email: authUser.email },
            update: {
              id: authUser.authId,
              role: authUser.role as UserRole,
            },
            create: {
              id: authUser.authId,
              email: authUser.email,
              role: authUser.role as UserRole,
              name: `${authUser.role.toLowerCase()} test user`,
            },
          });
          console.log(`[TEST RESET] Updated/created database profile for ${authUser.email} with auth ID: ${authUser.authId}`);
        } catch (err) {
          console.error(`Error updating profile for ${authUser.email}:`, err);
          throw err;
        }
      }

      console.log('[TEST RESET] Supabase Auth user creation completed');
    } catch (authError) {
      console.error('[TEST RESET] Failed to create Supabase Auth users:', authError);
      throw new Error(`Supabase Auth user creation failed: ${authError}`);
    }

    // Now call the seed function - it will create profiles with the matching IDs
    await seed();

    // Get summary via health check to validate seed results
    const healthResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/test-api/health`,
      {
        headers: {
          'x-test-secret': process.env.TEST_SECRET || 'test-secret-default'
        }
      }
    );
    if (!healthResponse.ok) {
      throw new Error(`Health check failed after seeding: ${healthResponse.status} ${healthResponse.statusText}`);
    }
    const summary = await healthResponse.json();

    // Fail fast if seed didn't work - adjust expectations based on dataset
    const minDogs = dataset === 'demo' ? 15 : 30;
    if (!summary || !summary.summary?.dogs?.total || summary.summary.dogs.total < minDogs) {
      const errorMsg = `Seed created insufficient dogs: ${summary?.summary?.dogs?.total || 0} (expected >= ${minDogs} for ${dataset})`;
      console.error('[TEST RESET]', errorMsg);
      return NextResponse.json({
        ok: false,
        error: errorMsg,
        summary
      }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      dataset,
      summary,
    });
  } catch (error) {
    console.error('[TEST RESET] Seed failed:', error);
    
    // Surface duplicate errors cleanly in JSON so CI and humans can see which emails collided
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const isDuplicateError = errorMessage.includes('[SEED] Duplicate');
    
    return NextResponse.json({
      ok: false,
      error: errorMessage,
      dataset: 'failed',
      isDuplicateError,
      ...(isDuplicateError && { 
        suggestion: 'Check volunteer snapshot for duplicate emails and regenerate with volunteer-factory.ts' 
      })
    }, { status: 500 });
  }
}
