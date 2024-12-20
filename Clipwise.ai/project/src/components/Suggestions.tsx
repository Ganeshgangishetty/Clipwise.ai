import React from 'react';
import { FileText, Link, Wand2 } from 'lucide-react';

export function Suggestions() {
  const suggestions = [
    {
      icon: <FileText className="h-4 w-4" />,
      text: 'Write a memo',
    },
    {
      icon: <Wand2 className="h-4 w-4" />,
      text: 'Generate social formulas',
    },
    {
      icon: <Link className="h-4 w-4" />,
      text: 'Summarize meeting notes',
    },
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          {suggestion.icon}
          <span className="text-sm">{suggestion.text}</span>
        </button>
      ))}
    </div>
  );
}