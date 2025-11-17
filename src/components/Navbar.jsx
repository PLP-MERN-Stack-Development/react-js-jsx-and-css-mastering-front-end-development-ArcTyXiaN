// src/components/Navbar.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar({ currentPage, setCurrentPage }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyTASK</h1>
      <ul className="flex gap-6 items-center">
        <button 
          className="hover:text-gray-300" 
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>
        <button 
          className="hover:text-gray-300" 
          onClick={() => setCurrentPage("tasks")}
        >
          Tasks
        </button>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded bg-gray-700 hover:bg-gray-600"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </ul>
    </nav>
  );
}