import { NextResponse, type NextRequest } from 'next/server';
import { isAllowedTestRequest, blockAs404 } from '@/lib/test-endpoints';
import { prisma } from '@/lib/prisma';
import { calculateAge } from '@/lib/utils/dog-utils';

export async function GET(request: Request) {
  if (!isAllowedTestRequest(request as unknown as NextRequest)) return blockAs404();

  try {
    // Get comprehensive dataset statistics
    const [
      dogs,
      profiles,
      shifts,
      shiftSignups,
    ] = await Promise.all([
      prisma.dog.findMany({
        select: {
          status: true,
          primaryPhotoUrl: true,
          dateOfBirth: true,
          size: true,
          specialNeeds: true,
          breed: true
        }
      }),
      prisma.profile.findMany({ select: { role: true } }),
      prisma.shift.count(),
      prisma.volunteerShiftSignup.count(),
    ]);

    // Calculate statistics matching seed summary format
    // Compute derived values from source fields
    const dogStats = {
      total: dogs.length,
      withPhotos: dogs.filter(d => d.primaryPhotoUrl && !d.primaryPhotoUrl.includes('placeholder')).length,
      seniors: dogs.filter(d => calculateAge(d.dateOfBirth) !== null && calculateAge(d.dateOfBirth)! >= 8).length, // 8+ years
      age: dogs.reduce((acc, dog) => {
        const age = calculateAge(dog.dateOfBirth);
        if (age !== null) {
          let bucket: string;
          if (age < 1) bucket = 'puppy'; // Less than 1 year
          else if (age < 8) bucket = 'adult'; // 1-7 years
          else bucket = 'senior'; // 8+ years
          acc[bucket] = (acc[bucket] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>),
      size: dogs.reduce((acc, dog) => {
        if (dog.size) {
          // Map DogSize enum to bucket names
          let bucket: string;
          if (dog.size === 'TOY' || dog.size === 'SMALL') bucket = 'small';
          else if (dog.size === 'MEDIUM') bucket = 'medium';
          else if (dog.size === 'LARGE') bucket = 'large';
          else bucket = dog.size.toLowerCase();
          acc[bucket] = (acc[bucket] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>),
      breeds: dogs.reduce((acc, dog) => {
        if (dog.breed) {
          acc[dog.breed] = (acc[dog.breed] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>),
      specialNeeds: dogs.filter(d => d.specialNeeds).length,
    };

    const profileStats = {
      total: profiles.length,
      byRole: profiles.reduce((acc, profile) => {
        acc[profile.role] = (acc[profile.role] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    };

    return NextResponse.json({
      dataset: 'realistic', // Assume realistic for test environment
      summary: {
        dogs: {
          total: dogStats.total,
          withPhotos: dogStats.withPhotos,
          age: dogStats.age,
          size: dogStats.size,
          breeds: dogStats.breeds,
          specialNeeds: dogStats.specialNeeds,
        },
        volunteers: {
          total: profileStats.total,
          staff: profileStats.byRole['STAFF'] || 0,
          admins: profileStats.byRole['ADMIN'] || 0,
        },
        shifts: {
          total: shifts,
          signups: shiftSignups,
        },
      },
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json({
      ok: false,
      error: 'Database health check failed'
    }, { status: 500 });
  }
}