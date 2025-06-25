import React, { useState } from 'react';
import blogPosts from '../data/blogs';

const POSTS_PER_PAGE = 5;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Make a copy, then reverse it.
  const reversedPosts = [...blogPosts].reverse();

  // 2. Work with the reversed list for paging.
  const totalPages  = Math.ceil(reversedPosts.length / POSTS_PER_PAGE);
  const startIndex  = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = reversedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>

      <div className="space-y-6">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {post.date} • {post.readTime}
            </p>
            <p className="mb-4">{post.description}</p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Read&nbsp;More&nbsp;→
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        {/* Render PREVIOUS only when we are beyond page 1 */}
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="btn btn-outline btn-sm"
            type="button"
          >
            Prev
          </button>
        )}

        <span className="text-sm opacity-70">
          Page {currentPage} of {totalPages || 1}
        </span>

        {/* Render NEXT only when there is another page */}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="btn btn-outline btn-sm"
            type="button"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
