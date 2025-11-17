import { describe, it, expect } from 'vitest'
import { shiftSchema, type ShiftFormData } from '../shift.schema'

describe('shiftSchema', () => {
  const validShiftData: ShiftFormData = {
    title: 'Morning Walk Shift',
    startsAt: '2025-12-01T09:00:00.000Z',
    endsAt: '2025-12-01T11:00:00.000Z',
    capacity: 3
  }

  describe('valid data', () => {
    it('should accept complete valid shift data', () => {
      const result = shiftSchema.safeParse(validShiftData)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(validShiftData)
      }
    })

    it('should accept shift data with null capacity', () => {
      const dataWithNullCapacity = {
        title: 'Evening Walk',
        startsAt: '2025-12-01T18:00:00.000Z',
        endsAt: '2025-12-01T20:00:00.000Z',
        capacity: null
      }
      const result = shiftSchema.safeParse(dataWithNullCapacity)
      expect(result.success).toBe(true)
    })
  })

  describe('title field', () => {
    it('should reject empty title', () => {
      const invalidData = {
        title: '',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 3
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('title')
        expect(result.error.issues[0].message).toContain('required')
      }
    })

    it('should accept title with whitespace', () => {
      const data = {
        title: '  Morning Shift  ',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 3
      }
      const result = shiftSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should accept single character title', () => {
      const data = {
        title: 'A',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 3
      }
      const result = shiftSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })

  describe('time fields', () => {
    it('should reject empty startsAt', () => {
      const invalidData = {
        title: 'Morning Shift',
        startsAt: '',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 3
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('startsAt')
        expect(result.error.issues[0].message).toContain('required')
      }
    })

    it('should reject empty endsAt', () => {
      const invalidData = {
        title: 'Morning Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '',
        capacity: 3
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('endsAt')
        expect(result.error.issues[0].message).toContain('required')
      }
    })

    it('should reject invalid startsAt format', () => {
      const invalidData = {
        title: 'Morning Shift',
        startsAt: 'invalid-date',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 3
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('startsAt')
        expect(result.error.issues[0].message).toContain('Invalid start time format')
      }
    })

    it('should reject invalid endsAt format', () => {
      const invalidData = {
        title: 'Morning Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: 'invalid-date',
        capacity: 3
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('endsAt')
        expect(result.error.issues[0].message).toContain('Invalid end time format')
      }
    })

    it('should accept valid ISO date strings', () => {
      const data = {
        title: 'Test Shift',
        startsAt: '2024-12-25T10:00:00.000Z',
        endsAt: '2024-12-25T12:00:00.000Z',
        capacity: 1
      }
      const result = shiftSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })

  describe('time ordering validation', () => {
    it('should reject when endsAt is before startsAt', () => {
      const invalidData = {
        title: 'Backwards Shift',
        startsAt: '2025-12-01T11:00:00.000Z',
        endsAt: '2025-12-01T09:00:00.000Z', // ends before it starts
        capacity: 3
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('endsAt')
        expect(result.error.issues[0].message).toContain('Start time must be before end time')
      }
    })

    it('should accept when endsAt is after startsAt', () => {
      const data = {
        title: 'Proper Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 3
      }
      const result = shiftSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should accept when times are exactly the same length apart', () => {
      const data = {
        title: 'One Hour Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T10:00:00.000Z',
        capacity: 3
      }
      const result = shiftSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })

  describe('capacity field', () => {
    it('should reject zero capacity', () => {
      const invalidData = {
        title: 'No Capacity Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 0
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('capacity')
      }
    })

    it('should reject negative capacity', () => {
      const invalidData = {
        title: 'Negative Capacity Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: -1
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('capacity')
      }
    })

    it('should reject non-integer capacity', () => {
      const invalidData = {
        title: 'Decimal Capacity Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 2.5
      }
      const result = shiftSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('capacity')
      }
    })

    it('should accept capacity of 1', () => {
      const data = {
        title: 'Single Capacity Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 1
      }
      const result = shiftSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should accept large capacity', () => {
      const data = {
        title: 'Big Event Shift',
        startsAt: '2025-12-01T09:00:00.000Z',
        endsAt: '2025-12-01T11:00:00.000Z',
        capacity: 100
      }
      const result = shiftSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })

})
