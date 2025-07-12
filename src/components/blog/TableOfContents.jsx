import React from 'react';

const TableOfContents = ({ sections, currentSectionIndex, onSectionClick, visibleSectionIndices }) => {
  // Helper function to check if a section has meaningful content (now directly from prop)
  const hasMeaningfulContent = (section) => {
    return section.hasMeaningfulContent;
  };

  const handleSectionClick = (index) => {
    if (visibleSectionIndices.includes(index)) {
      onSectionClick(index);
      window.history.pushState(null, '', `#section-${sections[index].id}`); // Use section.id for hash
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
              // Skip hidden and empty sections based on the new property
              if (!section.hasMeaningfulContent || !visibleSectionIndices.includes(index)) {
                return null;
              }
              
              const isActive = index === currentSectionIndex;
              // Determine indentation based on header level if needed (assuming Remark generates correct header levels)
              // For simplicity, we'll assume all TOC entries are primary for now or adjust based on actual HTML generated
              const indentClass = 'pl-0'; // Remark generates H2s so no sub-levels here directly
              
              return (
                <li key={section.id} className={indentClass}>
                  <button
                    onClick={() => handleSectionClick(index)}
                    className={`
                      w-full text-left block px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive
                        ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 font-bold text-base border-l-4 border-indigo-500'
                        : 'text-gray-900 dark:text-gray-50 font-bold text-base hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300'
                      }
                      hover:shadow-sm hover:scale-[1.02] hover:translate-x-1
                    `}
                    title={section.title}
                  >
                    <span className="block leading-relaxed">
                      {section.title}
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