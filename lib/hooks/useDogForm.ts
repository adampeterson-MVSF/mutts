import { useState, useRef, useCallback } from "react";
import { Dog } from "@prisma/client";

interface UseDogPhotoUploadProps {
  dog?: Dog;
}

export function useDogPhotoUpload({ dog }: UseDogPhotoUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(dog?.primaryPhotoUrl || null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((file: File | null) => {
    setSelectedFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(dog?.primaryPhotoUrl || null);
    }
  }, [dog?.primaryPhotoUrl]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const clearFile = useCallback(() => {
    handleFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [handleFileSelect]);

  const validateFile = useCallback((file: File): string | null => {
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      return "File size must be less than 10MB";
    }
    if (!file.type.startsWith('image/')) {
      return "File must be an image";
    }
    return null; // Valid for basic checks
  }, []);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const error = validateFile(file);
      if (error) {
        alert(error); // Simple error display - could be improved with toast
        return;
      }
      handleFileSelect(file);
    }
  }, [validateFile, handleFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const error = validateFile(file);
      if (error) {
        alert(error); // Simple error display - could be improved with toast
        return;
      }
      handleFileSelect(file);
    }
  }, [validateFile, handleFileSelect]);

  return {
    selectedFile,
    previewUrl,
    isDragOver,
    fileInputRef,
    handleFileSelect,
    handleDragOver,
    handleDragLeave,
    clearFile,
    validateFile,
    handleFileInputChange,
    handleDrop,
  };
}
