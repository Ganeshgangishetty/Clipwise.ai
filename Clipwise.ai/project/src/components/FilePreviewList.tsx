import React from 'react';
import { X } from 'lucide-react';
import { FilePreview } from '../types';

interface Props {
  files: FilePreview[];
  onRemove: (id: string) => void;
}

export function FilePreviewList({ files, onRemove }: Props) {
  if (files.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-700">Attached Files</h3>
      <div className="flex flex-wrap gap-2">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            <span className="truncate max-w-[200px]">{file.filename}</span>
            <button
              onClick={() => onRemove(file.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}