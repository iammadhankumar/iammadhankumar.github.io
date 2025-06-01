import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

import { ThemeProvider } from "./components/ThemeContext";

// Main layout that respects sidebar width
function ThemedLayout() {

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
    >
      <Sidebar />
      <main className="pl-64 p-6 overflow-auto min-h-screen">
        {/* Toggle button positioned top-right */}
        <div className="absolute top-4 right-6 z-20">
          <ThemeToggle />
        </div>
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

// App wrapper with router + theme provider
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
