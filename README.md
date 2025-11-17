# MyTASK

A modern task management application built with React and Tailwind CSS v4.

## Features

- Create, complete, and delete tasks
- Filter tasks by status (All, Active, Completed)
- Light and dark theme toggle
- Fully responsive design

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Tech Stack

- React 18.2.0
- Tailwind CSS v4
- React Context API

## Project Structure

```
src/
├── components/      # Reusable UI components
├── context/         # Theme context provider
├── pages/          # Page components
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## Key Components

- **TaskManager** - Core task functionality
- **ThemeContext** - Global theme state
- **Layout** - Application wrapper
- **Navbar** - Navigation with theme toggle

## Notes

- Tasks are stored in component state (resets on refresh)
- Uses state-based navigation (no React Router)
- Tailwind v4 syntax with `@import "tailwindcss"`

## Full Documentation

For detailed information about components, implementation details, and development guidelines, see [FULL_DOCS.md](https://hackmd.io/@I5OyzHQDSGWGWqeLjg1tSg/ryUZcI_eWx).

## See Live 
[link](https://react-eight-azure-98.vercel.app/)

## License

MIT