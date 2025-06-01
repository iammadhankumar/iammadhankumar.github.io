import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

import { ThemeProvider } from "./components/ThemeContext";

function ThemedLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      {/* Mobile hamburger toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* Sidebar: always shown on desktop, toggleable on mobile */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block fixed top-0 left-0 z-40`}
      >
        <Sidebar />
      </div>

      {/* Mobile overlay to close sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="md:pl-64 p-6 overflow-auto min-h-screen">
        {/* Theme toggle button */}
        <div className="absolute top-4 right-6 z-20">
          <ThemeToggle />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemedLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
