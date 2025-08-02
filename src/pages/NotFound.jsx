import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-center px-6">
      <h1 className="text-[6rem] md:text-[8rem] font-extrabold text-gray-300 dark:text-gray-700 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
        The page you’re trying to access isn’t available. It may have been removed, or the URL might be incorrect. Please return to the homepage to continue.      
     </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 text-lg font-medium shadow-md"
      >
        ⬅ Go Home
      </button>
    </div>
  );
}
