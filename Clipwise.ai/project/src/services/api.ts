import { ApiResponse } from '../types';

const API_URL = 'https://api.x.ai/v1/generate';

export async function generateScript(prompt: string, language: string = 'en'): Promise<ApiResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_X_AI_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        language,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate script');
    }

    const data = await response.json();
    return { script: data.text };
  } catch (error) {
    console.error('Error generating script:', error);
    return { script: '', error: 'Failed to generate script' };
  }
}