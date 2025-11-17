"use client";

import { Dog } from "@prisma/client";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Upload, X } from "lucide-react";

interface DogFormPhotoUploadProps {
  dog?: Dog;
  selectedFile: File | null;
  previewUrl: string | null;
  isDragOver: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearFile: () => void;
}

export function DogFormPhotoUpload({
  dog,
  selectedFile,
  previewUrl,
  isDragOver,
  fileInputRef,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleFileInputChange,
  clearFile,
}: DogFormPhotoUploadProps) {
  return (
    <div className="space-y-2">
      <Label>{dog ? 'Replace' : 'Add'} Primary Photo</Label>

      {/* Current/Preview Image */}
      {previewUrl && (
        <div className="relative inline-block">
          <Image
            src={previewUrl}
            alt={dog ? `Current photo of ${dog.name}` : "Photo preview"}
            width={150}
            height={150}
            className="rounded-md object-cover border"
          />
          {selectedFile && (
            <button
              type="button"
              onClick={clearFile}
              className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      )}

      {/* Drag and Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragOver
            ? 'border-primary bg-primary/5'
            : 'border-muted-foreground/25 hover:border-primary/50'
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
        <p className="text-sm text-muted-foreground mb-1">
          {isDragOver ? 'Drop image here' : 'Drag & drop an image here, or click to select'}
        </p>
        <p className="text-xs text-muted-foreground">
          PNG, JPG up to 10MB
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        name="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {selectedFile && (
        <p className="text-sm text-green-600">
          Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(1)}MB)
        </p>
      )}

      {!dog && !selectedFile && (
        <p className="text-sm text-muted-foreground">
          Upload a photo for this new dog.
        </p>
      )}
      {dog && !selectedFile && (
        <p className="text-sm text-muted-foreground">
          Upload a new file to replace the current photo.
        </p>
      )}
    </div>
  );
}
