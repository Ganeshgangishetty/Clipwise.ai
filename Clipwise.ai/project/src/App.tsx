import React, { useState } from 'react';
import { Header } from './components/Header';
import { Prompt } from './components/Prompt';
import { FileUpload } from './components/FileUpload';
import { ScriptOutput } from './components/ScriptOutput';
import { LanguageSelector } from './components/LanguageSelector';
import { FilePreviewList } from './components/FilePreviewList';
import { useScriptGeneration } from './hooks/useScriptGeneration';
import { processFile } from './utils/fileProcessing';
import { FilePreview } from './types';

function App() {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('en');
  const [files, setFiles] = useState<FilePreview[]>([]);
  const { isGenerating, error, scripts, generateNewScript } = useScriptGeneration();

  const handleFileSelect = async (fileList: FileList) => {
    try {
      const newFiles = await Promise.all(
        Array.from(fileList).map(processFile)
      );
      setFiles(prev => [...prev, ...newFiles]);
    } catch (error) {
      console.error('Error processing files:', error);
    }
  };

  const handleRemoveFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    
    const fileContents = files.map(f => f.content).join('\n');
    const fullPrompt = `${prompt}\n\nContext from files:\n${fileContents}`;
    
    await generateNewScript(fullPrompt, language);
  };

  return (
    <div className="min-h-screen bg-[#1E1F1E]">
      <Header />
      <main className="max-w-3xl mx-auto p-4 pt-8">
        <div className="space-y-6">
          <div className="flex justify-end">
            <LanguageSelector selected={language} onChange={setLanguage} />
          </div>
          
          <Prompt
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleSubmit}
          />
          
          <FileUpload onFileSelect={handleFileSelect} />
          <FilePreviewList files={files} onRemove={handleRemoveFile} />
          
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          {isGenerating ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
              <p className="mt-4 text-gray-400">Generating your script...</p>
            </div>
          ) : (
            scripts.map(script => (
              <ScriptOutput
                key={script.id}
                script={script.content}
                onDownload={() => {/* TODO */}}
                onCopy={() => navigator.clipboard.writeText(script.content)}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;