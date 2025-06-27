import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/images/profile.png';


export default function Sidebar({onLinkClick = () => {} }) {
  return (
    <aside className="w-64 h-[100dvh] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 pt-6 overflow-hidden shadow-lg transition-colors duration-300 fixed top-0 left-0 flex flex-col justify-between">
      <div>
        <div className="mb-8 text-center">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-gray-300 dark:border-gray-600"
          />
          <h1 className="font-semibold text-lg">Madhan Kumar</h1>
        </div>
          <nav className="flex-1 overflow-y-auto flex flex-col space-y-4">
          {["Home", "About", "Blog", "Store"].map((page) => (
            <NavLink
              key={page}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `block px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
                  isActive ? "bg-gray-300 dark:bg-gray-700 font-bold" : ""
                }`
              }
            >
              {page}
            </NavLink>
          ))}

          {/* Replace Contact NavLink with mailto anchor */}
          <a
            href="mailto:madhansmk1697@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              onLinkClick();
              window.location.href = "mailto:madhansmk1697@gmail.com";
            }}
            className="block px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </div>
          <div className="flex justify-center space-x-6 text-2xl border-t pb-[calc(env(safe-area-inset-bottom)+2rem)] border-gray-300 dark:border-gray-700 pt-4">
        <a
          href="https://github.com/iammadhankumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="hover:text-primary transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/iammadhankumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-primary transition-colors" />
        </a>
        <a
          href="https://x.com/MKTechGuy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="hover:text-primary transition-colors" />
        </a>
      </div>
    </aside>
  );
}
