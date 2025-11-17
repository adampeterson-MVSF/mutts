// lib/crypto.ts
/**
 * Field-level encryption utilities for PII protection
 *
 * Uses AES-256-GCM for authenticated encryption with PBKDF2 key derivation.
 * Keys are derived from environment variables and rotated regularly.
 */

import crypto from "crypto";

import { serverEnv } from './env-server';

// Environment variable for encryption key (32 bytes base64 encoded)
const isTrue = (v?: string) => v === "1" || v?.toLowerCase() === "true";
const testMode = (serverEnv.NODE_ENV !== "production") &&
                 (isTrue(process.env.EXPOSE_TEST_API) || serverEnv.ALLOW_TEST_ENDPOINTS === "1");

const ENCRYPTION_KEY = serverEnv.FIELD_ENCRYPTION_KEY || (testMode ? "mutts-e2e-dev-key" : "");
const KEY_LENGTH = 32; // 256 bits
const IV_LENGTH = 12;  // 96 bits for GCM
const TAG_LENGTH = 16; // 128 bits authentication tag
const PBKDF2_ITERATIONS = 100000;
const PBKDF2_SALT = serverEnv.FIELD_ENCRYPTION_SALT || (testMode ? "mutts-e2e-salt" : "default-salt-change-in-prod");

// Type assertion for crypto methods that exist at runtime but not in types
interface CipherGCM {
  update(data: Buffer | string, inputEncoding?: string): Buffer;
  final(): Buffer;
  getAuthTag(): Buffer;
  setAuthTag(tag: Buffer): void;
}

interface DecipherGCM {
  update(data: Buffer): Buffer;
  final(): Buffer;
  setAuthTag(tag: Buffer): void;
}

interface CryptoWithGCM {
  createCipherGCM(key: Buffer, iv: Buffer): CipherGCM;
  createDecipherGCM(key: Buffer, iv: Buffer): DecipherGCM;
}
const cryptoWithGCM = crypto as typeof crypto & CryptoWithGCM;

/**
 * Derive encryption key from environment variable using PBKDF2
 */
function getEncryptionKey(): Buffer {
  if (!ENCRYPTION_KEY) {
    throw new Error('FIELD_ENCRYPTION_KEY environment variable is required');
  }

  return crypto.pbkdf2Sync(
    ENCRYPTION_KEY,
    PBKDF2_SALT,
    PBKDF2_ITERATIONS,
    KEY_LENGTH,
    'sha256'
  );
}

/**
 * Encrypt a string value using AES-256-GCM
 * Returns base64-encoded ciphertext containing: IV + AuthTag + EncryptedData
 */
export function encrypt(plainText: string): string {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(IV_LENGTH);

  const cipher = cryptoWithGCM.createCipherGCM(key, iv);
  const encrypted = Buffer.concat([
    cipher.update(plainText, 'utf8'),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  // Concatenate: IV (12) + AuthTag (16) + EncryptedData (N)
  const result = Buffer.concat([iv, authTag, encrypted]);

  return result.toString('base64');
}

/**
 * Decrypt a base64-encoded ciphertext
 */
export function decrypt(cipherText: string): string {
  const key = getEncryptionKey();
  const data = Buffer.from(cipherText, 'base64');

  // Extract components: IV (0-12), AuthTag (12-28), EncryptedData (28+)
  const iv = data.subarray(0, IV_LENGTH);
  const authTag = data.subarray(IV_LENGTH, IV_LENGTH + TAG_LENGTH);
  const encrypted = data.subarray(IV_LENGTH + TAG_LENGTH);

  const decipher = cryptoWithGCM.createDecipherGCM(key, iv);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final()
  ]);

  return decrypted.toString('utf8');
}

/**
 * Safely decrypt with error handling for corrupted data
 */
export function safeDecrypt(cipherText: string | null): string | null {
  if (cipherText === null) {
    return null;
  }
  try {
    return decrypt(cipherText);
  } catch (error) {
    console.error('Failed to decrypt field data:', error);
    return null;
  }
}

/**
 * Hash sensitive data for indexing/searching without revealing content
 * Uses SHA-256 with salt for consistent hashing
 */
export function hashForIndexing(data: string): string {
  const salt = process.env.INDEX_HASH_SALT || 'index-salt';
  return crypto.createHash('sha256')
    .update(data + salt)
    .digest('hex');
}

/**
 * Validate encryption key format (should be base64-encoded 32 bytes)
 */
export function validateEncryptionKey(): boolean {
  if (!ENCRYPTION_KEY) return false;

  try {
    const key = Buffer.from(ENCRYPTION_KEY, 'base64');
    return key.length === KEY_LENGTH;
  } catch {
    return false;
  }
}
