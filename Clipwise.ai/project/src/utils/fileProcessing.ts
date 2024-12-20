import { FilePreview } from '../types';

export async function processFile(file: File): Promise<FilePreview> {
  const content = await readFileContent(file);
  return {
    id: crypto.randomUUID(),
    content,
    filename: file.name,
    type: file.type,
  };
}

async function readFileContent(file: File): Promise<string> {
  if (file.type.startsWith('text/')) {
    return await file.text();
  }
  
  if (file.type.startsWith('image/')) {
    // For now, return the file name as we'll implement OCR later
    return `[Image Content: ${file.name}]`;
  }

  throw new Error('Unsupported file type');
}

export function extractUrlContent(url: string): Promise<string> {
  // This is a placeholder - in a real implementation, you'd need a backend service
  // to fetch and process the URL content due to CORS restrictions
  return Promise.resolve(`[Content from: ${url}]`);
}