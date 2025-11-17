// src/components/Layout.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`min-h-screen flex flex-col ${
      theme === "dark" 
        ? "bg-gray-900 text-gray-100" 
        : "bg-gray-100 text-gray-800"
    }`}>
      {children}
    </div>
  );
}