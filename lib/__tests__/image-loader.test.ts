import { describe, it, expect, vi, beforeEach } from 'vitest';
import imageLoader from '../image-loader';

// Mock console methods to capture logging
const consoleSpy = {
  error: vi.spyOn(console, 'error').mockImplementation(() => {}),
  log: vi.spyOn(console, 'log').mockImplementation(() => {}),
  warn: vi.spyOn(console, 'warn').mockImplementation(() => {}),
};

describe('imageLoader', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset NODE_ENV for each test
    vi.stubEnv('NODE_ENV', undefined);
  });

  it('should load images from allowed domains without logging errors', () => {
    const result = imageLoader({
      src: 'https://via.placeholder.com/300x200',
      width: 300,
      quality: 75,
    });

    expect(result).toBe('https://via.placeholder.com/300x200?w=300&q=75');
    expect(consoleSpy.error).not.toHaveBeenCalled();
    expect(consoleSpy.log).toHaveBeenCalledWith(
      expect.stringContaining('✅ Loading image from allowed domain: via.placeholder.com')
    );
  });

  it('should handle Facebook CDN domains correctly', () => {
    const result = imageLoader({
      src: 'https://external.xx.fbcdn.net/image.jpg',
      width: 400,
    });

    expect(result).toBe('https://external.xx.fbcdn.net/image.jpg?w=400&q=75');
    expect(consoleSpy.error).not.toHaveBeenCalled();
  });

  it('should reject unknown domains and log errors once', () => {
    const result = imageLoader({
      src: 'https://evil-domain.com/malicious.jpg',
      width: 500,
    });

    expect(result).toBe('https://evil-domain.com/malicious.jpg?w=500&q=75');

    // Should log domain rejection
    expect(consoleSpy.error).toHaveBeenCalledWith(
      expect.stringContaining('🚫 Domain not allowed: evil-domain.com')
    );
    expect(consoleSpy.error).toHaveBeenCalledWith(
      expect.stringContaining('Allowed domains: ')
    );
    expect(consoleSpy.error).toHaveBeenCalledWith(
      expect.stringContaining('Image source: https://evil-domain.com/malicious.jpg')
    );

    // In development mode, should also suggest how to fix
    vi.stubEnv('NODE_ENV', 'development');
    vi.clearAllMocks();

    imageLoader({
      src: 'https://another-evil.com/image.png',
      width: 200,
    });

    expect(consoleSpy.error).toHaveBeenCalledWith(
      expect.stringContaining("To fix: Add 'another-evil.com' to remotePatterns in next.config.ts")
    );
  });

  it('should allow localhost in development', () => {
    vi.stubEnv('NODE_ENV', 'development');

    const result = imageLoader({
      src: 'http://localhost:3000/test.jpg',
      width: 100,
    });

    expect(result).toBe('http://localhost:3000/test.jpg?w=100&q=75');
    expect(consoleSpy.error).not.toHaveBeenCalled();
  });

  it('should warn about suspicious sources in development', () => {
    vi.stubEnv('NODE_ENV', 'development');

    imageLoader({
      src: 'http://127.0.0.1:8080/suspicious.png',
      width: 150,
    });

    expect(consoleSpy.warn).toHaveBeenCalledWith(
      expect.stringContaining('⚠️  Suspicious image source (allowed but review): http://127.0.0.1:8080/suspicious.png')
    );
  });

  it('should handle invalid URLs gracefully', () => {
    const result = imageLoader({
      src: 'not-a-url',
      width: 200,
    });

    expect(result).toBe('not-a-url?w=200&q=75');

    expect(consoleSpy.error).toHaveBeenCalledWith(
      expect.stringContaining('Failed to parse image URL: not-a-url'),
      expect.any(Error)
    );
  });

  it('should use default quality when not provided', () => {
    const result = imageLoader({
      src: 'https://via.placeholder.com/image.jpg',
      width: 250,
    });

    expect(result).toBe('https://via.placeholder.com/image.jpg?w=250&q=75');
  });

  it('should include Supabase domain when available', () => {
    const originalEnv = process.env.NEXT_PUBLIC_SUPABASE_URL;
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co';

    vi.clearAllMocks();

    imageLoader({
      src: 'https://test.supabase.co/storage/image.jpg',
      width: 300,
    });

    expect(consoleSpy.log).toHaveBeenCalledWith(
      expect.stringContaining('✅ Loading image from allowed domain: test.supabase.co')
    );

    // Restore
    if (originalEnv !== undefined) {
      process.env.NEXT_PUBLIC_SUPABASE_URL = originalEnv;
    } else {
      delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    }
  });
});
