import React, { useState } from 'react';
import blogPosts from '../data/blogs';

const POSTS_PER_PAGE = 5;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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
              Read More →
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="btn btn-outline btn-sm"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm opacity-70">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="btn btn-outline btn-sm"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
