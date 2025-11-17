import { describe, it, expect } from 'vitest'
import { UserRole, MedicalRecordType } from '@prisma/client'
import { z } from 'zod'

// Import the schemas we added during validation implementation
// Note: These are inline schemas, so we'll recreate them for testing
const updateStatusSchema = z.object({
  appId: z.coerce.number().int().positive({ message: "Invalid application ID" }),
  status: z.nativeEnum({ APPROVED: 'APPROVED', REJECTED: 'REJECTED', SUBMITTED: 'SUBMITTED' } as const, { message: "Invalid status" }),
})

const deleteDogSchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
})

const uploadImageSchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
  // File validation will be handled separately after dogId validation
})

const deleteEventSchema = z.object({
  eventId: z.coerce.number().int().positive({ message: "Invalid event ID" }),
})

// Allow any non-empty string to support seed data IDs like 'volunteer-46'
const fosterProfileSchema = z.object({
  profileId: z.string().min(1, { message: "Invalid profile ID" }),
  hasCats: z.boolean(),
  hasDogs: z.boolean(),
  canAdministerMeds: z.boolean(),
  notes: z.string().optional(),
})

const uploadDocSchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
  // File validation will be handled separately after dogId validation
})

const deleteDocSchema = z.object({
  documentId: z.coerce.number().int().positive({ message: "Invalid document ID" }),
  storagePath: z.string().min(1, { message: "Storage path is required" }),
})

const deleteRecordSchema = z.object({
  recordId: z.coerce.number().int().positive({ message: "Invalid record ID" }),
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
})

const medicalRecordBaseSchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Invalid dog ID" }),
  date: z.coerce.date({ message: "Invalid date" }),
  type: z.nativeEnum({ VACCINATION: 'VACCINATION', MEDICATION: 'MEDICATION', VET_VISIT: 'VET_VISIT' } as const, { message: "Invalid record type" }),
  notes: z.string().optional(),
})

const vaccinationSchema = medicalRecordBaseSchema.extend({
  type: z.literal('VACCINATION'),
  vaccineType: z.string().min(1, { message: "Vaccine type is required" }),
  nextDueDate: z.coerce.date().optional(),
})

const medicationSchema = medicalRecordBaseSchema.extend({
  type: z.literal('MEDICATION'),
  medicationName: z.string().min(1, { message: "Medication name is required" }),
  dosage: z.string().optional(),
  frequency: z.string().optional(),
})

const vetVisitSchema = medicalRecordBaseSchema.extend({
  type: z.literal('VET_VISIT'),
  vetName: z.string().optional(),
  visitReason: z.string().min(1, { message: "Visit reason is required" }),
})

const medicalRecordSchema = z.discriminatedUnion("type", [
  vaccinationSchema,
  medicationSchema,
  vetVisitSchema,
])

const createProfileSchema = z.object({
  name: z.string().optional(),
})

const updateRoleSchema = z.object({
  userId: z.string().uuid({ message: "Invalid user ID" }),
  role: z.nativeEnum({ ADMIN: 'ADMIN', STAFF: 'STAFF', VOLUNTEER: 'VOLUNTEER' } as const, { message: "Invalid role" }),
})

describe('Validation Schemas - Server Action Validation', () => {

  describe('updateStatusSchema', () => {
    it('should accept valid application status update data', () => {
      const validData = {
        appId: 123,
        status: 'APPROVED' as const
      }
      const result = updateStatusSchema.safeParse(validData)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(validData)
      }
    })

    it('should reject invalid application ID', () => {
      const invalidData = {
        appId: -1,
        status: 'APPROVED' as const
      }
      const result = updateStatusSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid application ID")
      }
    })

    it('should reject invalid status', () => {
      const invalidData = {
        appId: 123,
        status: 'INVALID_STATUS'
      }
      const result = updateStatusSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid status")
      }
    })
  })

  describe('deleteDogSchema', () => {
    it('should accept valid dog ID', () => {
      const validData = { dogId: 42 }
      const result = deleteDogSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid dog ID', () => {
      const invalidData = { dogId: 0 }
      const result = deleteDogSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject negative dog ID', () => {
      const invalidData = { dogId: -5 }
      const result = deleteDogSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('uploadImageSchema', () => {
    it('should accept valid dog ID for image upload', () => {
      const validData = { dogId: 123 }
      const result = uploadImageSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid dog ID for image upload', () => {
      const invalidData = { dogId: 'invalid' }
      const result = uploadImageSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('deleteEventSchema', () => {
    it('should accept valid event ID', () => {
      const validData = { eventId: 789 }
      const result = deleteEventSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid event ID', () => {
      const invalidData = { eventId: 0 }
      const result = deleteEventSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('fosterProfileSchema', () => {
    const validData = {
      profileId: '123e4567-e89b-12d3-a456-426614174000',
      hasCats: true,
      hasDogs: false,
      canAdministerMeds: true,
      notes: 'Experienced foster parent'
    }

    it('should accept valid foster profile data', () => {
      const result = fosterProfileSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should accept foster profile data without notes', () => {
      const dataWithoutNotes = { ...validData, notes: undefined }
      const result = fosterProfileSchema.safeParse(dataWithoutNotes)
      expect(result.success).toBe(true)
    })

    it('should reject empty profileId', () => {
      const invalidData = { ...validData, profileId: '' }
      const result = fosterProfileSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid profile ID")
      }
    })

    it('should reject non-boolean values for boolean fields', () => {
      const invalidData = { ...validData, hasCats: 'yes' }
      const result = fosterProfileSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('uploadDocSchema', () => {
    it('should accept valid dog ID for document upload', () => {
      const validData = { dogId: 456 }
      const result = uploadDocSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid dog ID for document upload', () => {
      const invalidData = { dogId: -10 }
      const result = uploadDocSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('deleteDocSchema', () => {
    it('should accept valid document deletion data', () => {
      const validData = {
        documentId: 123,
        storagePath: 'dogs/123/document.pdf'
      }
      const result = deleteDocSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid document ID', () => {
      const invalidData = {
        documentId: 0,
        storagePath: 'dogs/123/document.pdf'
      }
      const result = deleteDocSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject empty storage path', () => {
      const invalidData = {
        documentId: 123,
        storagePath: ''
      }
      const result = deleteDocSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Storage path is required")
      }
    })
  })

  describe('deleteRecordSchema', () => {
    it('should accept valid record deletion data', () => {
      const validData = {
        recordId: 789,
        dogId: 456
      }
      const result = deleteRecordSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid record ID', () => {
      const invalidData = {
        recordId: -1,
        dogId: 456
      }
      const result = deleteRecordSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject invalid dog ID', () => {
      const invalidData = {
        recordId: 789,
        dogId: 0
      }
      const result = deleteRecordSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('medicalRecordSchema - discriminated union', () => {
    describe('vaccination records', () => {
      it('should accept valid vaccination record', () => {
        const validData = {
          dogId: 123,
          date: new Date('2024-01-01'),
          type: 'VACCINATION' as const,
          vaccineType: 'Rabies',
          nextDueDate: new Date('2025-01-01'),
          notes: 'Annual vaccination'
        }
        const result = medicalRecordSchema.safeParse(validData)
        expect(result.success).toBe(true)
      })

      it('should reject vaccination record without vaccine type', () => {
        const invalidData = {
          dogId: 123,
          date: new Date('2024-01-01'),
          type: 'VACCINATION' as const,
          vaccineType: '',
          nextDueDate: new Date('2025-01-01')
        }
        const result = medicalRecordSchema.safeParse(invalidData)
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.issues[0].message).toContain("Vaccine type is required")
        }
      })
    })

    describe('medication records', () => {
      it('should accept valid medication record', () => {
        const validData = {
          dogId: 123,
          date: new Date('2024-01-01'),
          type: 'MEDICATION' as const,
          medicationName: 'Heartworm Prevention',
          dosage: '1 tablet',
          frequency: 'Monthly',
          notes: 'Preventive medication'
        }
        const result = medicalRecordSchema.safeParse(validData)
        expect(result.success).toBe(true)
      })

      it('should reject medication record without medication name', () => {
        const invalidData = {
          dogId: 123,
          date: new Date('2024-01-01'),
          type: 'MEDICATION' as const,
          medicationName: '',
          dosage: '1 tablet'
        }
        const result = medicalRecordSchema.safeParse(invalidData)
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.issues[0].message).toContain("Medication name is required")
        }
      })
    })

    describe('vet visit records', () => {
      it('should accept valid vet visit record', () => {
        const validData = {
          dogId: 123,
          date: new Date('2024-01-01'),
          type: 'VET_VISIT' as const,
          vetName: 'Dr. Smith',
          visitReason: 'Annual checkup',
          notes: 'Healthy checkup'
        }
        const result = medicalRecordSchema.safeParse(validData)
        expect(result.success).toBe(true)
      })

      it('should reject vet visit record without visit reason', () => {
        const invalidData = {
          dogId: 123,
          date: new Date('2024-01-01'),
          type: 'VET_VISIT' as const,
          vetName: 'Dr. Smith',
          visitReason: ''
        }
        const result = medicalRecordSchema.safeParse(invalidData)
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.issues[0].message).toContain("Visit reason is required")
        }
      })
    })

    it('should reject invalid record type', () => {
      const invalidData = {
        dogId: 123,
        date: new Date('2024-01-01'),
        type: 'INVALID_TYPE' as MedicalRecordType,
        vaccineType: 'Rabies'
      }
      const result = medicalRecordSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('createProfileSchema', () => {
    it('should accept valid profile creation data with name', () => {
      const validData = { name: 'John Doe' }
      const result = createProfileSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should accept profile creation data without name', () => {
      const validData = { name: undefined }
      const result = createProfileSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should accept empty object', () => {
      const validData = {}
      const result = createProfileSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
  })

  describe('updateRoleSchema', () => {
    it('should accept valid role update data', () => {
      const validData = {
        userId: '123e4567-e89b-12d3-a456-426614174000',
        role: 'ADMIN' as const
      }
      const result = updateRoleSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid UUID userId', () => {
      const invalidData = {
        userId: 'not-a-uuid',
        role: 'ADMIN' as const
      }
      const result = updateRoleSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid user ID")
      }
    })

    it('should reject invalid role', () => {
      const invalidData = {
        userId: '123e4567-e89b-12d3-a456-426614174000',
        role: 'INVALID_ROLE' as UserRole
      }
      const result = updateRoleSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid role")
      }
    })
  })
})
