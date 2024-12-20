import React, { ChangeEvent } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (files: FileList) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileSelect(e.target.files);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept=".txt,.pdf,.doc,.docx,.jpg,.png"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Upload files"
      />
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drop files here or click to upload
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Supports: TXT, PDF, DOC, Images
        </p>
      </div>
    </div>
  );
}