import React from 'react';

const BlogSection = ({ section, index }) => {
  if (!section || (!section.header && section.lines.length === 0)) {
    return null;
  }

  const getHeaderClasses = (level) => {
    const baseClasses = "font-bold leading-tight text-gray-900 dark:text-gray-50";
    switch (level) {
      case 1:
        return `text-4xl sm:text-5xl ${baseClasses} mb-8 mt-16 first:mt-0 pb-4 border-b border-gray-200 dark:border-gray-700`;
      case 2:
        return `text-3xl sm:text-4xl ${baseClasses} mb-6 mt-12`;
      case 3:
        return `text-2xl sm:text-3xl ${baseClasses} mb-5 mt-10`;
      case 4:
        return `text-xl sm:text-2xl ${baseClasses} mb-4 mt-8`;
      default:
        return `text-lg sm:text-xl ${baseClasses} mb-3 mt-6`;
    }
  };

  const HeaderComponent = () => {
    if (!section.header || section.header === '—') {
      return (
        <div className="flex justify-center my-12">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        </div>
      );
    }

    const HeaderTag = `h${Math.min(section.level + 1, 6)}`;
    const headerClasses = getHeaderClasses(section.level);

    return React.createElement(HeaderTag, {
      id: `section-${index}`,
      className: headerClasses,
      dangerouslySetInnerHTML: { __html: section.header }
    });
  };

  return (
    <section className="mb-16">
      <HeaderComponent />
      
      {section.lines && section.lines.length > 0 && (
        <div className="space-y-6 prose prose-lg max-w-none 
                       prose-headings:text-gray-900 dark:prose-headings:text-gray-50
                       prose-p:text-gray-800 dark:prose-p:text-gray-200
                       prose-strong:text-gray-900 dark:prose-strong:text-gray-50
                       prose-em:text-gray-700 dark:prose-em:text-gray-300
                       prose-code:text-indigo-600 dark:prose-code:text-indigo-400
                       prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800
                       prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                       prose-li:text-gray-800 dark:prose-li:text-gray-200">
          {section.lines.map((line, lineIndex) => {
            if (typeof line === 'string' && line.trim() === '') {
              return <div key={lineIndex} className="h-6"></div>;
            }
            
            return (
              <div
                key={lineIndex}
                dangerouslySetInnerHTML={{ __html: line }}
                className="text-gray-800 dark:text-gray-200 leading-relaxed"
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default BlogSection; 