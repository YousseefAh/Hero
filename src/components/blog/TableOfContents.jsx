import React from 'react';

const TableOfContents = ({ sections, currentSectionIndex, onSectionClick, visibleSectionIndices }) => {
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

  // Helper function to check if a section has meaningful content
  const hasMeaningfulContent = (section) => {
    if (!section.header || section.header === '—') return false;
    
    // Check if section has any non-empty lines
    const hasNonEmptyLines = section.lines.some(line => {
      if (typeof line !== 'string') return true;
      const strippedLine = line.replace(/<[^>]*>/g, '').trim();
      return strippedLine.length > 0 && strippedLine !== '—' && strippedLine !== '-';
    });

    return hasNonEmptyLines;
  };

  const handleSectionClick = (index) => {
    if (visibleSectionIndices.includes(index)) {
      onSectionClick(index);
      window.history.pushState(null, '', `#section-${index}`);
    }
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
              // Skip hidden and empty sections
              if (!hasMeaningfulContent(section) || !visibleSectionIndices.includes(index)) {
                return null;
              }
              
              const isActive = index === currentSectionIndex;
              const indentClass = section.level > 1 
                ? 'pl-6 border-l-2 border-slate-200 dark:border-slate-600 ml-2' 
                : '';
              
              const cleanHeader = cleanHeaderText(section.header);
              
              return (
                <li key={index} className={indentClass}>
                  <button
                    onClick={() => handleSectionClick(index)}
                    className={`
                      w-full text-left block px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive
                        ? section.level === 1
                          ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 font-bold text-base border-l-4 border-indigo-500'
                          : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm border-l-4 border-indigo-400'
                        : section.level === 1 
                          ? 'text-gray-900 dark:text-gray-50 font-bold text-base hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300' 
                          : 'text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:text-gray-900 dark:hover:text-gray-50'
                      }
                      hover:shadow-sm hover:scale-[1.02] hover:translate-x-1
                    `}
                    title={cleanHeader}
                  >
                    <span className="block leading-relaxed">
                      {cleanHeader}
                    </span>
                    {isActive && (
                      <div className="mt-1 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        Currently reading
                      </div>
                    )}
                  </button>
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