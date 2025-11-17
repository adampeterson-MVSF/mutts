import { describe, it, expect } from "vitest";
import { toCsv, sanitizeCell } from "./csv";

describe("CSV utilities", () => {
  describe("sanitizeCell", () => {
    it("handles null and undefined values", () => {
      expect(sanitizeCell(null)).toBe('""');
      expect(sanitizeCell(undefined)).toBe('""');
    });

    it("escapes formula injection attacks", () => {
      expect(sanitizeCell("=SUM(A1:B1)")).toBe("\"'=SUM(A1:B1)\"");
      expect(sanitizeCell("+1+2")).toBe("\"'+1+2\"");
      expect(sanitizeCell("-1")).toBe("\"'-1\"");
      expect(sanitizeCell("@import")).toBe("\"'@import\"");
    });

    it("escapes quotes properly", () => {
      expect(sanitizeCell('Hello "world"')).toBe('"Hello ""world"""');
    });

    it("handles normal strings", () => {
      expect(sanitizeCell("normal text")).toBe('"normal text"');
      expect(sanitizeCell("123")).toBe('"123"');
    });
  });

  describe("toCsv", () => {
    it("converts array of objects to CSV with headers", () => {
      const data = [
        { name: "John", age: 30, city: "NYC" },
        { name: "Jane", age: 25, city: "LA" },
      ];

      const result = toCsv(data);
      const lines = result.split('\n');

      expect(lines[0]).toBe('\uFEFF"name","age","city"');
      expect(lines[1]).toBe('"John","30","NYC"');
      expect(lines[2]).toBe('"Jane","25","LA"');
    });

    it("uses custom headers when provided", () => {
      const data = [
        { "Full Name": "John", "Years Old": 30 },
        { "Full Name": "Jane", "Years Old": 25 },
      ];
      const headers = ["Full Name", "Years Old"];

      const result = toCsv(data, headers);
      const lines = result.split('\n');

      expect(lines[0]).toBe('\uFEFF"Full Name","Years Old"');
      expect(lines[1]).toBe('"John","30"');
      expect(lines[2]).toBe('"Jane","25"');
    });

    it("handles empty array", () => {
      const result = toCsv([]);
      expect(result).toBe('\uFEFF\n');
    });

    it("handles empty array with custom headers", () => {
      const headers = ["Name", "Age"];
      const result = toCsv([], headers);
      expect(result).toBe('\uFEFF"Name","Age"\n');
    });

    it("sanitizes all cells including headers", () => {
      const data = [
        { "=formula": "+evil", "quoted": 'has "quotes"', "normal": "safe" },
      ];
      const headers = ["=header", "normal", "=formula", "quoted"];

      const result = toCsv(data, headers);
      const lines = result.split('\n');

      expect(lines[0]).toBe('\uFEFF"\'=header","normal","\'=formula","quoted"');
      expect(lines[1]).toBe('"","safe","\'+evil","has ""quotes"""');
    });
  });
});
