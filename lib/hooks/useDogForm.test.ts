/** @vitest-environment jsdom */

import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useDogPhotoUpload } from "./useDogForm";
import { DogStatus, DogSize, Gender } from "@prisma/client";

// Mock minimal dependencies
const mockDog = {
  id: 1,
  name: "Buddy",
  status: DogStatus.AVAILABLE,
  breed: "Golden Retriever",
  breedId: null,
  dateOfBirth: new Date(Date.now() - 3 * 365 * 24 * 60 * 60 * 1000), // 3 years ago
  primaryPhotoUrl: "https://example.com/photo.jpg",
  bioPublic: "Friendly dog",
  notesInternal: "Staff notes",
  specialNeeds: false,
  gender: Gender.MALE,
  weight_lbs: 50,
  size: DogSize.MEDIUM,
  mutt_id: null,
  page_url: null,
  fosterProfileId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Mock alert
global.alert = vi.fn();

// Mock URL.createObjectURL
global.URL.createObjectURL = vi.fn(() => 'blob:test-url');
global.URL.revokeObjectURL = vi.fn();

describe("useDogPhotoUpload", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("initializes with null preview for a new dog", () => {
    const { result } = renderHook(() =>
      useDogPhotoUpload({}),
    );
    expect(result.current.previewUrl).toBeNull();
  });

  it("initializes with dog photo URL for editing", () => {
    const { result } = renderHook(() =>
      useDogPhotoUpload({
        dog: mockDog,
      }),
    );
    expect(result.current.previewUrl).toBe(mockDog.primaryPhotoUrl);
  });


  it("handles valid file selection", () => {
    const { result } = renderHook(() =>
      useDogPhotoUpload({}),
    );
    const file = new File(["(⌐□_□)"], "buddy.png", { type: "image/png" });
    const mockEvent = {
      target: { files: [file] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleFileInputChange(mockEvent);
    });

    expect(result.current.selectedFile).toBe(file);
    expect(result.current.previewUrl).toContain("blob:");
  });

  it("validates file size", () => {
    const { result } = renderHook(() =>
      useDogPhotoUpload({}),
    );
    const largeFile = new File(["a".repeat(11 * 1024 * 1024)], "large.png", {
      type: "image/png",
    });
    const mockEvent = {
      target: { files: [largeFile] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleFileInputChange(mockEvent);
    });

    expect(result.current.selectedFile).toBeNull();
    expect(global.alert).toHaveBeenCalledWith(
      "File size must be less than 10MB",
    );
  });

  it("validates file type", () => {
    const { result } = renderHook(() =>
      useDogPhotoUpload({}),
    );
    const textFile = new File(["not an image"], "text.txt", {
      type: "text/plain",
    });
    const mockEvent = {
      target: { files: [textFile] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleFileInputChange(mockEvent);
    });

    expect(result.current.selectedFile).toBeNull();
    expect(global.alert).toHaveBeenCalledWith("File must be an image");
  });

  it("clears file selection", () => {
    const { result } = renderHook(() =>
      useDogPhotoUpload({
        dog: mockDog,
      }),
    );
    const file = new File(["(⌐□_□)"], "buddy.png", { type: "image/png" });
    const mockEvent = {
      target: { files: [file] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleFileInputChange(mockEvent);
    });
    expect(result.current.selectedFile).toBe(file);

    act(() => {
      result.current.clearFile();
    });

    expect(result.current.selectedFile).toBeNull();
    expect(result.current.previewUrl).toBe(mockDog.primaryPhotoUrl); // Reverts to original
  });

  it("handles drag and drop", () => {
    const { result } = renderHook(() =>
      useDogPhotoUpload({}),
    );
    const file = new File(["(⌐□_□)"], "dragged.png", { type: "image/png" });
    const mockEvent = {
      preventDefault: vi.fn(),
      dataTransfer: { files: [file] },
    } as unknown as React.DragEvent;

    act(() => {
      result.current.handleDrop(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(result.current.selectedFile).toBe(file);
  });
});
