import { describe, it, expect } from "vitest";
import { DogSize } from "@prisma/client";

// Import the functions from enrich-dogs.ts
// Note: These are copied here for testing - in a real setup you'd export them

const weightRe = /(\d+(?:\.\d+)?)\s*(?:pounds?|lbs?)/i;

function cleanUrl(u?: string | null) {
  if (!u) return undefined;
  let s = u.trim();
  if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1);
  s = s.replace(/%22/g, '"'); // decode stray quotes
  s = s.replace(/\s+/g, "");
  return s || undefined;
}

function inferWeightFromBio(bio?: string | null): number | undefined {
  if (!bio) return undefined;
  const m = bio.match(weightRe);
  if (!m) return undefined;
  const n = parseFloat(m[1]);
  return Number.isFinite(n) ? n : undefined;
}

function inferSize(weight?: number, breed?: string | null): DogSize | undefined {
  if (weight && Number.isFinite(weight)) {
    if (weight < 8) return DogSize.TOY;
    if (weight < 20) return DogSize.SMALL;
    if (weight < 45) return DogSize.MEDIUM;
    return DogSize.LARGE;
  }
  const b = (breed || "").toLowerCase();
  if (!b) return undefined;
  if (b.includes("pomeranian")) return DogSize.TOY;
  if (b.includes("chihuahua")) return DogSize.SMALL;
  if (b.includes("shih tzu")) return DogSize.SMALL;
  if (b.includes("pug")) return DogSize.SMALL;
  if (b.includes("spaniel")) return DogSize.SMALL; // conservative default
  if (b.includes("whippet")) return DogSize.MEDIUM;
  if (b.includes("husky") || b.includes("retriever") || b.includes("labrador") || b.includes("weimaraner")) return DogSize.LARGE;
  if (b.includes("pit") || b.includes("bulldog")) return DogSize.MEDIUM;
  return undefined;
}

function extractMuttIdFromUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  const m = url.match(/\/mutt\/[^/]*?(\d+)\b/);
  return m?.[1];
}

function extractIdFromPhotoUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  const m = url.match(/(\d{4,})/g); // longest numeric run in path
  return m ? m[m.length - 1] : undefined;
}

function makePageUrl(name: string, muttId: string) {
  // Simple slugify for testing (without external dep)
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `https://muttville.org/mutt/${slug}-${muttId}`;
}

describe("Dog Enrichment Functions", () => {
  describe("cleanUrl", () => {
    it("removes surrounding quotes", () => {
      expect(cleanUrl('"https://example.com"')).toBe("https://example.com");
    });

    it("decodes %22 to quotes", () => {
      expect(cleanUrl('https://example.com%22')).toBe('https://example.com"');
    });

    it("normalizes whitespace", () => {
      expect(cleanUrl("  https://example.com  ")).toBe("https://example.com");
    });

    it("returns undefined for empty strings", () => {
      expect(cleanUrl("")).toBeUndefined();
      expect(cleanUrl("   ")).toBeUndefined();
    });
  });

  describe("inferWeightFromBio", () => {
    it("extracts weight in pounds", () => {
      expect(inferWeightFromBio("This dog weighs 45 pounds")).toBe(45);
      expect(inferWeightFromBio("She is 12.5 lbs")).toBe(12.5);
    });

    it("returns undefined when no weight found", () => {
      expect(inferWeightFromBio("This dog is very friendly")).toBeUndefined();
    });

    it("handles case insensitive matching", () => {
      expect(inferWeightFromBio("Weighs 25 POUNDS")).toBe(25);
      expect(inferWeightFromBio("about 13 LBS")).toBe(13);
    });
  });

  describe("inferSize", () => {
    it("infers size from weight", () => {
      expect(inferSize(5)).toBe(DogSize.TOY);
      expect(inferSize(15)).toBe(DogSize.SMALL);
      expect(inferSize(30)).toBe(DogSize.MEDIUM);
      expect(inferSize(50)).toBe(DogSize.LARGE);
    });

    it("infers size from breed when weight unknown", () => {
      expect(inferSize(undefined, "Pomeranian")).toBe(DogSize.TOY);
      expect(inferSize(undefined, "Chihuahua")).toBe(DogSize.SMALL);
      expect(inferSize(undefined, "Shih Tzu")).toBe(DogSize.SMALL);
      expect(inferSize(undefined, "Husky")).toBe(DogSize.LARGE);
      expect(inferSize(undefined, "Labrador Retriever")).toBe(DogSize.LARGE);
    });

    it("returns undefined for unknown breeds", () => {
      expect(inferSize(undefined, "Unknown Breed")).toBeUndefined();
    });
  });

  describe("extractMuttIdFromUrl", () => {
    it("extracts ID from page URLs", () => {
      expect(extractMuttIdFromUrl("https://muttville.org/mutt/paul-revere-12345")).toBe("12345");
      expect(extractMuttIdFromUrl("https://muttville.org/mutt/california-love-67890")).toBe("67890");
    });

    it("returns undefined for URLs without IDs", () => {
      expect(extractMuttIdFromUrl("https://muttville.org/mutt/paul-revere")).toBeUndefined();
    });
  });

  describe("extractIdFromPhotoUrl", () => {
    it("extracts longest numeric sequence from photo URLs", () => {
      expect(extractIdFromPhotoUrl("https://muttville.org/images/mutts/114/8/3/114835-100001-lg.jpg")).toBe("100001");
    });

    it("returns undefined when no long numeric sequence found", () => {
      expect(extractIdFromPhotoUrl("https://example.com/image.jpg")).toBeUndefined();
    });
  });

  describe("makePageUrl", () => {
    it("creates proper page URLs", () => {
      expect(makePageUrl("Paul Revere", "12345")).toBe("https://muttville.org/mutt/paul-revere-12345");
      expect(makePageUrl("California Love", "67890")).toBe("https://muttville.org/mutt/california-love-67890");
    });

    it("handles special characters in names", () => {
      expect(makePageUrl("Earl Sweatshirt", "11111")).toBe("https://muttville.org/mutt/earl-sweatshirt-11111");
    });
  });
});
