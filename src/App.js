import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate, useLocation, BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Store from "./pages/store";

import { ThemeProvider } from "./components/ThemeContext";

/* ───────────────────────── helpers ───────────────────────── */

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [navigate]);

  return null;
}

/* ───────────────────────── layout ────────────────────────── */

function ThemedLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    /* ↧ NEW: scroll-to-top on every pathname change */
  const mainRef   = useRef(null);
  const location  = useLocation();

  useLayoutEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);
  /* ↥ END NEW */

  useEffect(() => {
  if (mobileSidebarOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [mobileSidebarOpen]);


  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-[100dvh] bg-white dark:bg-gray-800 shadow md:translate-x-0 transform transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
         <Sidebar onLinkClick={() => setMobileSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="md:ml-64 h-screen flex flex-col overflow-hidden">
        {/* Top bar with hamburger and theme toggle */}
        <div className="flex items-center justify-end p-4 shadow md:shadow-none space-x-4">

            {/* Theme toggle — left on mobile, right on desktop */}
            <div className="md:ml-auto">
              <ThemeToggle />
            </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200 text-2xl p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setMobileSidebarOpen(true)}
          >
            ☰
          </button>
          {/* Theme Toggle on right */}
          {/* <div className="ml-auto">
            <ThemeToggle />
          </div> */}
        </div>

        {/* Routes content */}
        <main ref={mainRef} className="flex-1 overflow-y-auto p-4"> 
          <RedirectHandler />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

/* ───────────────────────── app root ──────────────────────── */

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
