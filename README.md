# React TypeScript Task Manager

A modern React application built with TypeScript and Tailwind CSS that demonstrates component architecture, state management, hooks usage, and API integration.

## Features

- 🎨 Responsive design with Tailwind CSS
- 🌓 Light/Dark mode theme switching
- ✅ Task management with local storage persistence
- 🔄 API integration with JSONPlaceholder
- 📱 Mobile-friendly interface

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Headless UI
- Hero Icons

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd my-react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── context/        # React Context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components
└── App.tsx         # Main application component
```

## Features

### Task Management
- Add, delete, and toggle tasks
- Filter tasks by status (All/Active/Completed)
- Persistent storage using localStorage

### Theme Switching
- Light/Dark mode support
- System preference detection
- Persistent theme selection

### API Integration
- Fetch and display posts from JSONPlaceholder
- Search functionality
- Pagination support
- Loading and error states

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
