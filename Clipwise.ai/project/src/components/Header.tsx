import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#2A2B2A] text-white">
      <div className="flex items-center space-x-2">
        <Sparkles className="h-6 w-6 text-yellow-400" />
        <span className="text-lg font-medium">ScriptAI</span>
      </div>
      <button className="px-4 py-1.5 text-sm bg-[#4A4B4A] rounded-full hover:bg-[#5A5B5A] transition-colors">
        Professional Plan
      </button>
    </header>
  );
}