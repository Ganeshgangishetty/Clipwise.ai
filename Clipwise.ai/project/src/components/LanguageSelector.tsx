import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageOption {
  code: string;
  name: string;
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
];

interface Props {
  selected: string;
  onChange: (code: string) => void;
}

export function LanguageSelector({ selected, onChange }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-500" />
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="form-select text-sm border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}