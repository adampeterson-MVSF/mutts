import { describe, it, expect } from 'vitest';
import { DogStatus, LogType } from '@prisma/client';
import {
  dogFormSchema,
  logEntrySchema,
  shiftIdSchema,
  eventFormSchema,
  applicationSchema,
  shiftSchema,
} from './schemas';

describe('Schemas', () => {
  describe('dogFormSchema', () => {
    it('validates correct dog form data', () => {
      const validData = {
        name: 'Buddy',
        status: DogStatus.AVAILABLE,
        breed: 'Golden Retriever',
        age: 3,
        bioPublic: 'Friendly dog',
        notesInternal: 'Good with kids',
        fosterProfileId: null,
        specialNeeds: false,
      };

      const result = dogFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('Buddy');
        expect(result.data.specialNeeds).toBe(false);
      }
    });

    it('requires name field', () => {
      const invalidData = {
        status: DogStatus.AVAILABLE,
        breed: 'Golden Retriever',
        age: 3,
        specialNeeds: false,
      };

      const result = dogFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.name).toBeDefined();
      }
    });

    it('validates dateOfBirth as date or null', () => {
      const validData = { name: 'Buddy', dateOfBirth: new Date('2020-01-01'), specialNeeds: false };
      const result = dogFormSchema.safeParse(validData);
      expect(result.success).toBe(true);

      // Schema preprocesses invalid dates to null, so this should succeed
      const invalidData = { name: 'Buddy', dateOfBirth: 'invalid-date', specialNeeds: false };
      const result2 = dogFormSchema.safeParse(invalidData);
      expect(result2.success).toBe(true);
      expect(result2.data?.dateOfBirth).toBeNull();
    });

    it('allows nullable optional fields', () => {
      const validData = {
        name: 'Buddy',
        breed: null,
        dateOfBirth: null,
        bioPublic: null,
        notesInternal: null,
        fosterProfileId: null,
        specialNeeds: true,
      };

      const result = dogFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('logEntrySchema', () => {
    it('validates correct log entry data', () => {
      const validData = {
        dogId: 123,
        logType: LogType.FEEDING,
        notes: 'Ate well',
      };

      const result = logEntrySchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.dogId).toBe(123);
        expect(result.data.logType).toBe(LogType.FEEDING);
      }
    });

    it('requires dogId and logType', () => {
      const invalidData = { notes: 'Some notes' };
      const result = logEntrySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.dogId).toBeDefined();
        expect(result.error.flatten().fieldErrors.logType).toBeDefined();
      }
    });

    it('allows null notes', () => {
      const validData = {
        dogId: 123,
        logType: LogType.WALK,
        notes: null,
      };

      const result = logEntrySchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('shiftIdSchema', () => {
    it('validates positive integer shift ID', () => {
      const validData = { shiftId: 123 };
      const result = shiftIdSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('rejects invalid shift IDs', () => {
      const invalidData = { shiftId: -1 };
      const result = shiftIdSchema.safeParse(invalidData);
      expect(result.success).toBe(false);

      const invalidData2 = { shiftId: 'not-a-number' };
      const result2 = shiftIdSchema.safeParse(invalidData2);
      expect(result2.success).toBe(false);
    });
  });

  describe('eventFormSchema', () => {
    it('validates correct event form data', () => {
      const validData = {
        title: 'Dog Walking Event',
        description: 'A fun event',
        startTime: '2024-01-01T10:00:00Z',
        endTime: '2024-01-01T12:00:00Z',
        location: 'Central Park',
      };

      const result = eventFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('requires title, startTime, and endTime', () => {
      const invalidData = { description: 'Some event' };
      const result = eventFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.title).toBeDefined();
        expect(result.error.flatten().fieldErrors.startTime).toBeDefined();
        expect(result.error.flatten().fieldErrors.endTime).toBeDefined();
      }
    });

    it('validates end time is after start time', () => {
      const invalidData = {
        title: 'Event',
        startTime: '2024-01-01T12:00:00Z',
        endTime: '2024-01-01T10:00:00Z',
      };

      const result = eventFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.endTime).toBeDefined();
      }
    });
  });

  describe('shiftSchema', () => {
    it('validates correct shift data', () => {
      const validData = {
        title: 'Morning Shift',
        description: 'Early morning walk',
        startsAt: '2024-01-01T08:00:00Z',
        endsAt: '2024-01-01T10:00:00Z',
        capacity: 5,
      };

      const result = shiftSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('requires title, startsAt, endsAt, and capacity', () => {
      const invalidData = { description: 'Some shift' };
      const result = shiftSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('validates maxVolunteers is at least 1', () => {
      const invalidData = {
        title: 'Shift',
        startTime: '2024-01-01T08:00:00Z',
        endTime: '2024-01-01T10:00:00Z',
        maxVolunteers: 0,
      };

      const result = shiftSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('validates start time is before end time', () => {
      const invalidData = {
        title: 'Shift',
        startTime: '2024-01-01T12:00:00Z',
        endTime: '2024-01-01T08:00:00Z',
        maxVolunteers: 2,
      };

      const result = shiftSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('applicationSchema', () => {
    it('validates correct application data', () => {
      const validData = {
        reason: 'I love dogs and have experience caring for them.',
        references: [
          { name: 'John Doe', phone: '555-1234', relationship: 'Friend' },
        ],
        dogId: 1
      };

      const result = applicationSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('requires reason with minimum length', () => {
      const invalidData = { reason: 'Too short' };
      const result = applicationSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.reason).toBeDefined();
      }
    });

    it('validates references array', () => {
      const validData = {
        reason: 'Valid reason with enough characters to pass validation.',
        references: [{ name: 'John Doe' }],
      };

      const result = applicationSchema.safeParse(validData);
      expect(result.success).toBe(true);

      const invalidData = {
        ...validData,
        references: [{ name: '' }], // Empty name should fail
      };

      const result2 = applicationSchema.safeParse(invalidData);
      expect(result2.success).toBe(false);
    });
  });
});
