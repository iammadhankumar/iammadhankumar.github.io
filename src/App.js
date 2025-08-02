import { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  useNavigate,
  useLocation,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Store from "./pages/store";
import Projects from "./pages/projects";
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "./components/ThemeContext";

/* ───────────────────── helpers ───────────────────── */

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

/* ───────────────────── Trailing Slash Remover ───────────── */

function TrailingSlashRemover() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname.endsWith("/")) {
      navigate(location.pathname.replace(/\/+$/, ""), { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}

/* ───────────────────── layout-aware ───────────── */

function AppLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const mainRef = useRef(null);
  const location = useLocation();

  const layoutRoutes = ["/", "/about", "/blog", "/contact", "/store", "/projects"];
  const showLayout = layoutRoutes.includes(location.pathname.toLowerCase());

  useLayoutEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileSidebarOpen]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {showLayout && mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {showLayout && (
        <div
          className={`fixed top-0 left-0 z-40 w-64 h-[100dvh] bg-white dark:bg-gray-800 shadow md:translate-x-0 transform transition-transform duration-300 ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <Sidebar onLinkClick={() => setMobileSidebarOpen(false)} />
        </div>
      )}

      <div className={showLayout ? "md:ml-64 min-h-screen flex flex-col overflow-hidden" : ""}>
        {showLayout && (
          <div className="flex items-center justify-end p-4 shadow md:shadow-none space-x-4">
            <div className="md:ml-auto">
              <ThemeToggle />
            </div>
            <button
              className="md:hidden text-gray-800 dark:text-gray-200 text-2xl p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setMobileSidebarOpen(true)}
            >
              ☰
            </button>
          </div>
        )}

        <main ref={mainRef} className="flex-1 overflow-y-auto p-4">
          <RedirectHandler />
          <TrailingSlashRemover />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {showLayout && <Footer />}
      </div>
    </div>
  );
}

/* ───────────────────── root wrapper ───────────── */

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
