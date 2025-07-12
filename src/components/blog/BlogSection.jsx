import React from 'react';

const BlogSection = ({ section }) => {
  if (!section || !section.hasMeaningfulContent) {
    return null;
  }

  // Handle text selection
  const handleSelection = (e) => {
    e.stopPropagation();
    const selection = window.getSelection();
    if (!selection || !selection.toString()) {
      e.preventDefault();
    }
  };

  return (
    <section 
      id={section.id} // Set the ID for navigation
      className="mb-16"
      onMouseUp={handleSelection}
      onTouchEnd={handleSelection}
    >
      {/* Render the section title. Use an h2 as sections are split by h2s in blogUtils.js */}
      {section.title && (
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 dark:text-gray-50 mb-6 mt-12">
          {section.title}
        </h2>
      )}

      {/* Render the HTML content */}
      {section.htmlContent && (
        <div 
          className="space-y-6 prose prose-lg max-w-none 
                     prose-h1:text-gray-900 dark:prose-h1:text-gray-50
                     prose-h2:text-gray-900 dark:prose-h2:text-gray-50
                     prose-h3:text-gray-900 dark:prose-h3:text-gray-50
                     prose-h4:text-gray-900 dark:prose-h4:text-gray-50
                     prose-p:text-gray-800 dark:prose-p:text-gray-200
                     prose-strong:text-gray-900 dark:prose-strong:text-gray-50
                     prose-em:text-gray-700 dark:prose-em:text-gray-300
                     prose-code:text-indigo-600 dark:prose-code:text-indigo-400
                     prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800
                     prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                     prose-li:text-gray-800 dark:prose-li:text-gray-200
                     selection:bg-indigo-500 dark:selection:bg-indigo-500
                     selection:text-white dark:selection:text-white"
          dangerouslySetInnerHTML={{ __html: section.htmlContent }}
          onSelect={(e) => e.stopPropagation()}
        />
      )}
    </section>
  );
};

export default BlogSection; 