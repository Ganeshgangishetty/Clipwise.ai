export interface Script {
  id: string;
  content: string;
  title: string;
  language: string;
  createdAt: Date;
}

export interface FilePreview {
  id: string;
  content: string;
  filename: string;
  type: string;
}

export interface ApiResponse {
  script: string;
  error?: string;
}