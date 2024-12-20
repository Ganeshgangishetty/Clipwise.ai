import React from 'react';
import { Settings2 } from 'lucide-react';

interface PromptProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function Prompt({ value, onChange, onSubmit }: PromptProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="relative">
      <div className="rounded-lg border border-gray-300 bg-white shadow-sm">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="How can I help you with your video script today?"
          className="w-full min-h-[120px] p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center justify-between p-3 border-t">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings2 className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Generate Script
          </button>
        </div>
      </div>
    </div>
  );
}