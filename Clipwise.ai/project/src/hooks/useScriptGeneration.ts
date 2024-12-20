import { useState } from 'react';
import { generateScript } from '../services/api';
import { Script } from '../types';

export function useScriptGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scripts, setScripts] = useState<Script[]>([]);

  const generateNewScript = async (prompt: string, language: string = 'en') => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await generateScript(prompt, language);
      
      if (response.error) {
        setError(response.error);
        return null;
      }

      const newScript: Script = {
        id: crypto.randomUUID(),
        content: response.script,
        title: prompt.slice(0, 50) + '...',
        language,
        createdAt: new Date(),
      };

      setScripts(prev => [newScript, ...prev]);
      return newScript;
    } catch (err) {
      setError('Failed to generate script');
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    error,
    scripts,
    generateNewScript,
  };
}