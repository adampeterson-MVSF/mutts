// prisma/__tests__/seed-helpers.test.ts
import { describe, it, expect } from 'vitest';
import { Gender, DogSize } from '@prisma/client';
import { normalizeGender, normalizeSize, parseAgeToMonths, assertUnique } from '../seed-helpers';

describe('normalizeGender', () => {
  it('should normalize male variants', () => {
    expect(normalizeGender('male')).toBe(Gender.MALE);
    expect(normalizeGender('Male')).toBe(Gender.MALE);
    expect(normalizeGender('MALE')).toBe(Gender.MALE);
    expect(normalizeGender('m')).toBe(Gender.MALE);
    expect(normalizeGender(' M ')).toBe(Gender.MALE);
  });

  it('should normalize female variants', () => {
    expect(normalizeGender('female')).toBe(Gender.FEMALE);
    expect(normalizeGender('Female')).toBe(Gender.FEMALE);
    expect(normalizeGender('FEMALE')).toBe(Gender.FEMALE);
    expect(normalizeGender('f')).toBe(Gender.FEMALE);
  });

  it('should return null for unknown values', () => {
    expect(normalizeGender('unknown')).toBeNull();
    expect(normalizeGender('')).toBeNull();
    expect(normalizeGender('other')).toBeNull();
  });
});

describe('normalizeSize', () => {
  it('should normalize toy variants', () => {
    expect(normalizeSize('toy')).toBe(DogSize.TOY);
    expect(normalizeSize('Toy dog')).toBe(DogSize.TOY);
    expect(normalizeSize('xs')).toBe(DogSize.TOY);
  });

  it('should normalize small variants', () => {
    expect(normalizeSize('small')).toBe(DogSize.SMALL);
    expect(normalizeSize('Small dog')).toBe(DogSize.SMALL);
    expect(normalizeSize('s')).toBe(DogSize.SMALL);
  });

  it('should normalize medium variants', () => {
    expect(normalizeSize('medium')).toBe(DogSize.MEDIUM);
    expect(normalizeSize('Medium dog')).toBe(DogSize.MEDIUM);
    expect(normalizeSize('m')).toBe(DogSize.MEDIUM);
  });

  it('should normalize large variants', () => {
    expect(normalizeSize('large')).toBe(DogSize.LARGE);
    expect(normalizeSize('Large dog')).toBe(DogSize.LARGE);
    expect(normalizeSize('l')).toBe(DogSize.LARGE);
    expect(normalizeSize('xl')).toBe(DogSize.LARGE);
  });

  it('should return null for unknown values', () => {
    expect(normalizeSize('unknown')).toBeNull();
    expect(normalizeSize('')).toBeNull();
  });
});

describe('parseAgeToMonths', () => {
  it('should parse years', () => {
    expect(parseAgeToMonths('2 years')).toBe(24);
    expect(parseAgeToMonths('1 year')).toBe(12);
    expect(parseAgeToMonths('5 years old')).toBe(60);
  });

  it('should parse months', () => {
    expect(parseAgeToMonths('6 months')).toBe(6);
    expect(parseAgeToMonths('3 mos')).toBe(3);
    expect(parseAgeToMonths('12 months')).toBe(12);
  });

  it('should parse plain numbers as years', () => {
    expect(parseAgeToMonths('2')).toBe(24);
    expect(parseAgeToMonths('5')).toBe(60);
  });

  it('should return null for invalid input', () => {
    expect(parseAgeToMonths('')).toBeNull();
    expect(parseAgeToMonths('unknown')).toBeNull();
    expect(parseAgeToMonths('30')).toBeNull(); // Too old for reasonable dog age
  });
});

describe('assertUnique', () => {
  it('should not throw for unique items', () => {
    const items = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    expect(() => assertUnique(items, item => item.name, 'names')).not.toThrow();
  });

  it('should throw for duplicate items', () => {
    const items = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' }
    ];
    expect(() => assertUnique(items, item => item.name, 'names')).toThrow(
      '[SEED] Duplicate names:'
    );
    expect(() => assertUnique(items, item => item.name, 'names')).toThrow(
      '"Alice": 2'
    );
  });

  it('should handle multiple duplicates', () => {
    const items = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'Bob' },
      { id: 5, name: 'Charlie' }
    ];
    expect(() => assertUnique(items, item => item.name, 'names')).toThrow(
      '[SEED] Duplicate names:'
    );
    expect(() => assertUnique(items, item => item.name, 'names')).toThrow(
      '"Alice": 2'
    );
    expect(() => assertUnique(items, item => item.name, 'names')).toThrow(
      '"Bob": 2'
    );
  });
});
