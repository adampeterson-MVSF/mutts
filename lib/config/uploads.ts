// Upload validation constants - centralized configuration for file uploads
// Used by both client-side validation and server-side validation

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const ALLOWED_EXTENSIONS = [
  '.pdf',
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.tiff',
  '.bmp'
];

export const ALLOWED_CONTENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/tiff',
  'image/bmp'
];
