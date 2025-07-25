import React, { useState, useEffect } from 'react';
import blogPosts from '../data/blogs';

const POSTS_PER_PAGE = 5;

// tidy long subtitles
const truncate = (text, max = 150) =>
  text.length > max ? `${text.slice(0, max).trim()}…` : text;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  /* newest first */
  const reversedPosts = [...blogPosts].reverse();

  /* paging */
  const totalPages   = Math.ceil(reversedPosts.length / POSTS_PER_PAGE);
  const startIndex   = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = reversedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

   // Scroll to top on mount AND page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);


  return (
    <div className="px-6 py-10 max-w-3xl mx-auto text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-extrabold mb-10">Blog</h1>

      {/* single-column list, whole card clickable */}
      <div className="space-y-10">
        {currentPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-gray-300 dark:border-gray-700 pb-6
                       text-gray-900 dark:text-gray-100
                       visited:text-gray-900 dark:visited:text-gray-100
                       focus:outline-none focus:ring-0
                       group last:border-b-0"
          >
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold mb-2 leading-snug break-words">
              {post.title}
            </h2>

            {/* Subtitle / description */}
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {truncate(post.description)}
            </p>

            {/* Other meta info */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {post.date} • {post.readTime}
            </p>
          </a>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center items-center mt-12 gap-3">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            className="inline-flex items-center gap-1 rounded px-3 py-1 text-xs font-medium
                       text-gray-700 bg-white border border-gray-300
                       hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none
                       focus:outline-none focus:ring-0 transition
                       dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                       dark:hover:bg-gray-700"
            type="button"
          >
            ← Prev
          </button>
        )}

        <span className="text-sm opacity-80">
          Page {currentPage} of {totalPages || 1}
        </span>

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            className="inline-flex items-center gap-1 rounded px-3 py-1 text-xs font-medium
                       text-gray-700 bg-white border border-gray-300
                       hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none
                       focus:outline-none focus:ring-0 transition
                       dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                       dark:hover:bg-gray-700"
            type="button"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
