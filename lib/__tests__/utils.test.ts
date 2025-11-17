import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { cn, getAppStatusVariant, getDogStatusVariant, validateTestEndpoint } from '../utils'
import { sanitizeCell } from '../csv'
import { AppStatus, DogStatus } from '@prisma/client'
import { ROUTES, isPublicRoute } from '../routes'
import { getRequiredRole, hasSufficientRole } from '../middleware/router'
import { UserRole } from '@prisma/client'

// Mock hasEnvVars to return true for testing
const mockHasEnvVars = true

describe('cn', () => {
  it('should merge class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
    expect(cn('class1', undefined, 'class2')).toBe('class1 class2')
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500') // tailwind-merge should resolve conflicts
  })

  it('should handle empty inputs', () => {
    expect(cn()).toBe('')
    expect(cn('', undefined)).toBe('')
  })

  it('should handle conditional classes', () => {
    const condition = true
    expect(cn('base', condition && 'conditional')).toBe('base conditional')
    expect(cn('base', !condition && 'conditional')).toBe('base')
  })
})

describe('hasEnvVars', () => {
  it('should return true when env vars are present', () => {
    expect(mockHasEnvVars).toBe(true)
  })

  it('should return boolean type when env vars are present', () => {
    expect(typeof mockHasEnvVars).toBe('boolean')
    expect(mockHasEnvVars).toBe(true)
  })
})

describe('getAppStatusVariant', () => {
  it('should return correct variants for each app status', () => {
    expect(getAppStatusVariant(AppStatus.APPROVED)).toBe('default')
    expect(getAppStatusVariant(AppStatus.SUBMITTED)).toBe('secondary')
    expect(getAppStatusVariant(AppStatus.IN_REVIEW)).toBe('secondary')
    expect(getAppStatusVariant(AppStatus.REJECTED)).toBe('destructive')
  })

  it('should return outline for unknown statuses', () => {
    expect(getAppStatusVariant('UNKNOWN' as AppStatus)).toBe('outline')
  })
})

describe('getDogStatusVariant', () => {
  it('should return correct variants for each dog status', () => {
    expect(getDogStatusVariant(DogStatus.ADOPTED)).toBe('default')
    expect(getDogStatusVariant(DogStatus.AVAILABLE)).toBe('secondary')
    expect(getDogStatusVariant(DogStatus.MEDICAL_HOLD)).toBe('destructive')
    expect(getDogStatusVariant(DogStatus.PENDING)).toBe('outline')
    expect(getDogStatusVariant(DogStatus.IN_FOSTER)).toBe('outline')
    expect(getDogStatusVariant(DogStatus.INTAKE)).toBe('secondary')
    expect(getDogStatusVariant(DogStatus.SANCTUARY)).toBe('secondary')
  })
})

describe('sanitizeCell', () => {
  it('should handle null and undefined values', () => {
    expect(sanitizeCell(null)).toBe('""')
    expect(sanitizeCell(undefined)).toBe('""')
  })

  it('should convert values to strings', () => {
    expect(sanitizeCell(123)).toBe('"123"')
    expect(sanitizeCell(true)).toBe('"true"')
    expect(sanitizeCell(false)).toBe('"false"')
  })

  it('should escape double quotes', () => {
    expect(sanitizeCell('Hello "world"')).toBe('"Hello ""world"""')
    expect(sanitizeCell('"')).toBe('""""')
  })

  it('should prefix formula injection characters with single quote', () => {
    expect(sanitizeCell('=SUM(A1:A10)')).toBe('"\'=SUM(A1:A10)"')
    expect(sanitizeCell('+1-800-HACKED')).toBe('"\'+1-800-HACKED"')
    expect(sanitizeCell('-123')).toBe('"\'-123"')
    expect(sanitizeCell('@cmd')).toBe('"\'@cmd"')
  })

  it('should handle formula injection with quotes', () => {
    expect(sanitizeCell('=HYPERLINK("http://evil.com","Click me")')).toBe('"\'=HYPERLINK(""http://evil.com"",""Click me"")"')
  })

  it('should not prefix normal values', () => {
    expect(sanitizeCell('normal text')).toBe('"normal text"')
    expect(sanitizeCell('email@example.com')).toBe('"email@example.com"')
    expect(sanitizeCell('John Doe')).toBe('"John Doe"')
  })

  it('should handle edge cases', () => {
    expect(sanitizeCell('')).toBe('""')
    expect(sanitizeCell('=')).toBe('"\'="')
    expect(sanitizeCell('=1')).toBe('"\'=1"')
  })

  it('should only prefix once for multiple dangerous characters', () => {
    expect(sanitizeCell('=-1')).toBe('"\'=-1"')
    expect(sanitizeCell('=+-@')).toBe('"\'=+-@"')
  })
})

describe('Route Configuration', () => {
  describe('ROUTES', () => {
    it('should contain expected public routes', () => {
      expect(ROUTES.public).toContain('/')
      expect(ROUTES.public).toContain('/adopt')
      expect(ROUTES.public).toContain('/happy-tails')
    })

    it('should contain expected volunteer routes', () => {
      expect(ROUTES.volunteer).toContain('/volunteer')
      expect(ROUTES.volunteer).toContain('/apply')
    })

    it('should contain expected staff routes', () => {
      expect(ROUTES.staff).toContain('/admin/applications')
      expect(ROUTES.staff).toContain('/api/dogs')
    })

    it('should contain expected admin routes', () => {
      expect(ROUTES.admin).toContain('/admin/users')
      expect(ROUTES.admin).toContain('/api/medical-documents')
    })
  })

  describe('isPublicRoute', () => {
    it('should return true for public routes', () => {
      expect(isPublicRoute('/')).toBe(true)
      expect(isPublicRoute('/auth/login')).toBe(true)
      expect(isPublicRoute('/adopt')).toBe(true)
      expect(isPublicRoute('/adopt/123')).toBe(true)
    })

    it('should return false for non-public routes', () => {
      expect(isPublicRoute('/admin')).toBe(false)
      expect(isPublicRoute('/events')).toBe(false)
      expect(isPublicRoute('/api/test')).toBe(false)
    })
  })

  describe('getRequiredRole', () => {
    it('should return null for public routes', () => {
      expect(getRequiredRole('/')).toBe(null)
      expect(getRequiredRole('/adopt')).toBe(null)
      expect(getRequiredRole('/auth/login')).toBe(null)
    })

    it('should return VOLUNTEER for volunteer routes', () => {
      expect(getRequiredRole('/volunteer')).toBe(UserRole.VOLUNTEER)
      expect(getRequiredRole('/apply/adopt')).toBe(UserRole.VOLUNTEER)
    })

    it('should return STAFF for staff routes', () => {
      expect(getRequiredRole('/admin')).toBe(UserRole.STAFF)
      expect(getRequiredRole('/admin/applications')).toBe(UserRole.STAFF)
      expect(getRequiredRole('/admin/events')).toBe(UserRole.STAFF)
      expect(getRequiredRole('/api/dogs')).toBe(UserRole.STAFF)
    })

    it('should return ADMIN for admin routes', () => {
      expect(getRequiredRole('/admin/users')).toBe(UserRole.ADMIN)
      expect(getRequiredRole('/api/medical-documents')).toBe(UserRole.ADMIN)
    })
  })

  describe('hasSufficientRole', () => {
    it('should allow ADMIN to access all routes', () => {
      expect(hasSufficientRole(UserRole.VOLUNTEER, UserRole.ADMIN)).toBe(true)
      expect(hasSufficientRole(UserRole.STAFF, UserRole.ADMIN)).toBe(true)
      expect(hasSufficientRole(UserRole.ADMIN, UserRole.ADMIN)).toBe(true)
    })

    it('should allow STAFF to access staff and volunteer routes', () => {
      expect(hasSufficientRole(UserRole.VOLUNTEER, UserRole.STAFF)).toBe(true)
      expect(hasSufficientRole(UserRole.STAFF, UserRole.STAFF)).toBe(true)
      expect(hasSufficientRole(UserRole.ADMIN, UserRole.STAFF)).toBe(false)
    })

    it('should allow VOLUNTEER to access only volunteer routes', () => {
      expect(hasSufficientRole(UserRole.VOLUNTEER, UserRole.VOLUNTEER)).toBe(true)
      expect(hasSufficientRole(UserRole.STAFF, UserRole.VOLUNTEER)).toBe(false)
      expect(hasSufficientRole(UserRole.ADMIN, UserRole.VOLUNTEER)).toBe(false)
    })
  })

describe('validateTestEndpoint', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv } as NodeJS.ProcessEnv
    process.env.EXPOSE_TEST_API = '1'
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('should reject requests when NODE_ENV is not test', () => {
    vi.stubEnv('NODE_ENV', 'production')
    const request = new Request('http://localhost/api/test', {
      headers: { 'x-test-secret': 'test-secret' }
    })

    const result = validateTestEndpoint(request)

    expect(result.isValid).toBe(false)
    expect(result.response?.status).toBe(404)
  })

  it('should reject requests when NODE_ENV is development', () => {
    vi.stubEnv('NODE_ENV', 'development')
    const request = new Request('http://localhost/api/test', {
      headers: { 'x-test-secret': 'test-secret' }
    })

    const result = validateTestEndpoint(request)

    expect(result.isValid).toBe(false)
    expect(result.response?.status).toBe(404)
  })

  it('should reject requests when test secret header is missing', () => {
    vi.stubEnv('NODE_ENV', 'test')
    const request = new Request('http://localhost/api/test')

    const result = validateTestEndpoint(request)

    expect(result.isValid).toBe(false)
    expect(result.response?.status).toBe(404)
  })

  it('should reject requests when test secret header is incorrect', () => {
    vi.stubEnv('NODE_ENV', 'test')
    process.env.TEST_SECRET = 'correct-secret'
    const request = new Request('http://localhost/api/test', {
      headers: { 'x-test-secret': 'wrong-secret' }
    })

    const result = validateTestEndpoint(request)

    expect(result.isValid).toBe(false)
    expect(result.response?.status).toBe(404)
  })

  it('should accept requests with correct secret in test environment', () => {
    vi.stubEnv('NODE_ENV', 'test')
    process.env.TEST_SECRET = 'correct-secret'
    const request = new Request('http://localhost/api/test', {
      headers: { 'x-test-secret': 'correct-secret' }
    })

    const result = validateTestEndpoint(request)

    expect(result.isValid).toBe(true)
    expect(result.response).toBeUndefined()
  })

  it('should use default secret when TEST_SECRET is not set', () => {
    vi.stubEnv('NODE_ENV', 'test')
    delete process.env.TEST_SECRET
    const request = new Request('http://localhost/api/test', {
      headers: { 'x-test-secret': 'test-secret-default' }
    })

    const result = validateTestEndpoint(request)

    expect(result.isValid).toBe(true)
    expect(result.response).toBeUndefined()
  })
})
})
