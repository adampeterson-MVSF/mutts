// Define types locally since they're not exported from the actual components
type Uploader = (file: File, onProgress: (progress: number) => void) => Promise<UploadResult>;
type UploadResult = { id: string; url: string };

export const makeMockUploader = (steps = [0, 25, 50, 75, 100], succeed = true): Uploader => {
  return async (_file: File, onProgress: (progress: number) => void) => {
    for (const pct of steps) {
      onProgress(pct);
      // tick so UI can update; avoid real timers to keep tests fast
      await new Promise(resolve => setTimeout(resolve, 1));
    }
    if (!succeed) throw new Error("Simulated upload failure");
    const result: UploadResult = { id: "doc_123", url: "https://example.com/doc.pdf" };
    return result;
  };
};
