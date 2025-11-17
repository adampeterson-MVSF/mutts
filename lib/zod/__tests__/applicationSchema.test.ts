import { describe, it, expect } from 'vitest'
import { applicationSchema, profileSchema, type ApplicationFormData, type ProfileFormData } from '../applicationSchema'

describe('profileSchema', () => {
  const validProfileData: ProfileFormData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
  }

  describe('valid data', () => {
    it('should accept complete valid data', () => {
      const result = profileSchema.safeParse(validProfileData)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(validProfileData)
      }
    })

    it('should accept minimal valid data', () => {
      const minimalData = {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
      }
      const result = profileSchema.safeParse(minimalData)
      expect(result.success).toBe(true)
    })
  })

  // Note: Applicant fields (address, housingType, etc.) are now part of applicationSchema, not profileSchema
  describe('profile fields only', () => {
    it('should require firstName', () => {
      const invalidData = {
        lastName: 'Doe',
        email: 'john@example.com',
      }
      const result = profileSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should require lastName', () => {
      const invalidData = {
        firstName: 'John',
        email: 'john@example.com',
      }
      const result = profileSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should require valid email', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'invalid-email',
      }
      const result = profileSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})

describe('applicationSchema', () => {
  const validApplicationData: ApplicationFormData = {
    reason: 'This is a valid reason that is longer than 10 characters for testing purposes.',
    references: [
      {
        name: 'Jane Doe',
        phone: '+1-555-111-2222',
        relationship: 'Neighbor'
      },
      {
        name: 'John Smith',
        phone: '+1-555-333-4444',
        relationship: 'Friend'
      }
    ],
    dogId: 1,
    // Applicant fields (now part of Application schema)
    address: '123 Main Street, Anytown, USA',
    housingType: 'OWN_HOME',
    hasYard: 'YES',
    yardFenced: true,
    homeEnvironmentDescription: 'Quiet suburban home with a backyard'
  }

  describe('valid data', () => {
    it('should accept complete valid data', () => {
      const result = applicationSchema.safeParse(validApplicationData)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(validApplicationData)
      }
    })

    it('should accept minimal valid data', () => {
      const minimalData = {
        reason: 'This is a valid reason that meets the minimum length requirement.',
        address: '123 Main St',
        housingType: 'OWN_HOME',
        hasYard: 'YES',
        yardFenced: true,
        homeEnvironmentDescription: 'A nice home'
      }
      const result = applicationSchema.safeParse(minimalData)
      expect(result.success).toBe(true)
    })

    it('should accept data with empty references array', () => {
      const dataWithEmptyRefs = {
        ...validApplicationData,
        references: []
      }
      const result = applicationSchema.safeParse(dataWithEmptyRefs)
      expect(result.success).toBe(true)
    })
  })

  describe('reason field', () => {
    it('should reject reason shorter than 10 characters', () => {
      const invalidData = {
        reason: 'Too short'
      }
      const result = applicationSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('reason')
        expect(result.error.issues[0].message).toContain('min 10 characters')
      }
    })

    it('should accept reason exactly 10 characters', () => {
      const data = {
        reason: '1234567890' // exactly 10 characters
      }
      const result = applicationSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should accept reason longer than 10 characters', () => {
      const data = {
        reason: 'This is definitely longer than ten characters and should be accepted.'
      }
      const result = applicationSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })

  describe('references field', () => {
    it('should accept valid references', () => {
      const data = {
        reason: 'This is a valid reason that is longer than 10 characters.',
        references: [
          {
            name: 'Jane Doe',
            phone: '+1-555-111-2222',
            relationship: 'Neighbor'
          }
        ]
      }
      const result = applicationSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should reject references with empty name', () => {
      const invalidData = {
        reason: 'This is a valid reason that is longer than 10 characters.',
        references: [
          {
            name: '', // empty name
            phone: '+1-555-111-2222',
            relationship: 'Neighbor'
          }
        ]
      }
      const result = applicationSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('references')
        expect(result.error.issues[0].path).toContain('name')
        expect(result.error.issues[0].message).toContain('required')
      }
    })

    it('should accept references with only name (phone and relationship optional)', () => {
      const data = {
        reason: 'This is a valid reason that is longer than 10 characters.',
        references: [
          {
            name: 'Jane Doe'
            // phone and relationship are optional
          }
        ]
      }
      const result = applicationSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })

  describe('dogId field', () => {
    it('should accept valid positive integer', () => {
      const data = {
        reason: 'This is a valid reason that is longer than 10 characters.',
        dogId: 42
      }
      const result = applicationSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should reject negative dogId', () => {
      const invalidData = {
        reason: 'This is a valid reason that is longer than 10 characters.',
        dogId: -1
      }
      const result = applicationSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject zero dogId', () => {
      const invalidData = {
        reason: 'This is a valid reason that is longer than 10 characters.',
        dogId: 0
      }
      const result = applicationSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject non-integer dogId', () => {
      const invalidData = {
        reason: 'This is a valid reason that is longer than 10 characters.',
        dogId: 1.5
      }
      const result = applicationSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('optional fields', () => {
    const optionalFields = [
      'references',
      'dogId',
      'applicantPhone',
      'otherPets',
      'vetName',
      'vetPhone'
    ]

    optionalFields.forEach(field => {
      it(`should accept data without ${field}`, () => {
        const data = {
          reason: 'This is a valid reason that is longer than 10 characters.',
          address: '123 Main St',
          housingType: 'OWN_HOME',
          hasYard: 'YES',
          yardFenced: true,
          homeEnvironmentDescription: 'A nice home'
        }
        const result = applicationSchema.safeParse(data)
        expect(result.success).toBe(true)
      })
    })
  })
})
