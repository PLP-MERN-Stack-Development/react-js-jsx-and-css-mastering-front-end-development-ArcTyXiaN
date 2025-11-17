// src/App.jsx
import { useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TaskManager from "./components/TaskManager";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Layout>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow flex justify-center items-center px-4">
        <div className="w-full max-w-3xl">
          {currentPage === "home" ? (
            <Home setCurrentPage={setCurrentPage} />
          ) : (
            <TaskManager />
          )}
        </div>
      </main>
      <Footer />
    </Layout>
  );
}