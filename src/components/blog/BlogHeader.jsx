import React from 'react';

const BlogHeader = ({ title, readingTime, totalLines }) => {
  return (
    <header className="relative py-16 mb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/20 dark:to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {title}
        </h1>
        
        <div className="flex flex-wrap gap-6 text-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              {readingTime} min read
            </span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              {totalLines.toLocaleString()} lines
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader; 