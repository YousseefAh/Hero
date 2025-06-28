import React from 'react';

const TableOfContents = ({ sections }) => {
  // Function to strip HTML tags and asterisks from header text for display
  const cleanHeaderText = (html) => {
    if (!html) return '';
    // First remove HTML tags
    let cleaned = html.replace(/<[^>]*>/g, '');
    // Then remove any remaining asterisks
    cleaned = cleaned.replace(/\*+/g, '');
    // Clean up extra spaces
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    return cleaned;
  };

  return (
    <nav className="w-full">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-950/20 dark:to-transparent">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
            Table of Contents
          </h2>
        </div>
        
        <div className="px-4 py-6 max-h-[70vh] overflow-y-auto">
          <ul className="space-y-2">
            {sections.map((section, index) => {
              if (!section.header || section.header === '—') return null;
              
              const indentClass = section.level > 1 
                ? 'pl-6 border-l-2 border-slate-200 dark:border-slate-600 ml-2' 
                : '';
              
              const cleanHeader = cleanHeaderText(section.header);
              
              return (
                <li key={index} className={indentClass}>
                  <a
                    href={`#section-${index}`}
                    className={`
                      block px-4 py-3 rounded-lg transition-all duration-200
                      ${section.level === 1 
                        ? 'text-gray-900 dark:text-gray-50 font-bold text-base hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300' 
                        : 'text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:text-gray-900 dark:hover:text-gray-50'}
                      hover:shadow-sm hover:scale-[1.02] hover:translate-x-1
                    `}
                    title={cleanHeader}
                  >
                    <span className="block leading-relaxed">
                      {cleanHeader}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TableOfContents; 