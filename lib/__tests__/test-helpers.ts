// Test helpers for common mocking patterns

import { vi } from 'vitest'

// Mock Supabase auth with common patterns
export const mockSupabaseAuth = {
  getUser: vi.fn()
}

// Mock createClient function that returns Supabase client
export const mockCreateClient = vi.fn(() => ({
  auth: mockSupabaseAuth
}))

// Helper to setup authenticated user
export const setupAuthenticatedUser = (user = { id: 'test-user-id' }) => {
  mockSupabaseAuth.getUser.mockResolvedValue({ data: { user } })
}

// Helper to setup unauthenticated state
export const setupUnauthenticatedUser = () => {
  mockSupabaseAuth.getUser.mockResolvedValue({ data: { user: null } })
}

// Reset all mocks
export const resetAllMocks = () => {
  vi.clearAllMocks()
}

// Common test data
export const testUser = { id: 'test-user-id', email: 'test@example.com' }
export const testAdminUser = { id: 'admin-user-id', email: 'admin@example.com' }
