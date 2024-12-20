import React from 'react';
import { Download, Copy } from 'lucide-react';

interface ScriptOutputProps {
  script: string;
  onDownload: () => void;
  onCopy: () => void;
}

export function ScriptOutput({ script, onDownload, onCopy }: ScriptOutputProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Generated Script</h2>
        <div className="space-x-2">
          <button
            onClick={onCopy}
            className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50"
            title="Copy to clipboard"
          >
            <Copy className="h-5 w-5" />
          </button>
          <button
            onClick={onDownload}
            className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50"
            title="Download script"
          >
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <pre className="whitespace-pre-wrap bg-gray-50 rounded-lg p-4 text-sm">
          {script || 'Your generated script will appear here...'}
        </pre>
      </div>
    </div>
  );
}