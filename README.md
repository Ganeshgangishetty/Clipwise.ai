# Clipwise.ai
    # AI-Powered Video Script Generator

A modern web application built with React and TypeScript that generates video scripts using AI. The application features a dynamic input system, file processing capabilities, and multi-language support.

![Application Screenshot](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3)

## Features

- 🤖 AI-powered script generation using X.AI API
- 📁 File upload support (text files and images)
- 🔗 URL content extraction
- 🌐 Multi-language support
- 💾 Save and manage generated scripts
- 📱 Fully responsive design
- ⚡ Real-time script generation
- 🎨 Modern and intuitive UI

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API Integration**: X.AI API
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- X.AI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/video-script-generator.git
   cd video-script-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your X.AI API key:
   ```env
   VITE_X_AI_KEY=your_x_ai_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Features in Detail

### File Processing
- Supports text file uploads (.txt)
- Image content extraction (placeholder for future OCR integration)
- URL content extraction (basic implementation)

### Script Generation
- Real-time AI script generation
- Support for multiple languages
- Context-aware generation using uploaded files and URLs

### User Interface
- Dark mode design
- Responsive layout for all devices
- Intuitive file upload system
- Real-time generation status updates

## Project Structure

```
src/
├── components/      # React components
├── hooks/          # Custom React hooks
├── services/       # API and external service integrations
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [X.AI](https://x.ai) for providing the AI API
- [Lucide](https://lucide.dev) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for the styling system

## Live Demo

Visit the live demo: [AI Video Script Generator](https://effulgent-fenglisu-e214b0.netlify.app)

## Contact

Your Name - [@yourusername](https://www.linkedin.com/in/ganesh-gangishetty/)

Project Link: [https://github.com/yourusername/video-script-generator](https://github.com/Clipwise.ai/project)

