'use client';

import React, { useState, useEffect } from 'react';
import TableOfContents from './TableOfContents';
import BlogSection from './BlogSection';
import Link from 'next/link';

export default function BlogClient({ sections, readingTime, totalLines }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Helper function to check if a section has meaningful content (now directly from prop)
  const hasMeaningfulContent = (section) => {
    return section.hasMeaningfulContent;
  };

  // Filter out hidden and empty sections
  const visibleSections = sections.filter(section => section.hasMeaningfulContent);
  const visibleSectionIndices = sections.reduce((acc, section, index) => {
    if (section.hasMeaningfulContent) {
      acc.push(index);
    }
    return acc;
  }, []);

  // Handle URL hash changes for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#section-')) {
        const id = hash.replace('#section-', ''); // Extract the ID
        const index = sections.findIndex(section => section.id === id); // Find the index by ID
        if (index !== -1 && visibleSectionIndices.includes(index)) {
          setCurrentSectionIndex(index);
        } else {
          // If trying to navigate to a hidden section or invalid ID, go to the first visible section
          const nextVisibleIndex = visibleSectionIndices[0];
          if (nextVisibleIndex !== undefined) {
            setCurrentSectionIndex(nextVisibleIndex);
            window.history.replaceState(null, '', `#section-${sections[nextVisibleIndex].id}`);
          }
        }
      }
    };

    handleHashChange(); // Check initial hash
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections, visibleSectionIndices]); // Added sections to dependency array

  const goToNextSection = () => {
    const currentVisibleIndex = visibleSectionIndices.indexOf(currentSectionIndex);
    if (currentVisibleIndex < visibleSectionIndices.length - 1) {
      const nextIndex = visibleSectionIndices[currentVisibleIndex + 1];
      setCurrentSectionIndex(nextIndex);
      window.history.pushState(null, '', `#section-${sections[nextIndex].id}`);
    }
  };

  const goToPreviousSection = () => {
    const currentVisibleIndex = visibleSectionIndices.indexOf(currentSectionIndex);
    if (currentVisibleIndex > 0) {
      const prevIndex = visibleSectionIndices[currentVisibleIndex - 1];
      setCurrentSectionIndex(prevIndex);
      window.history.pushState(null, '', `#section-${sections[prevIndex].id}`);
    }
  };

  // If current section is hidden/empty, navigate to the next visible section
  useEffect(() => {
    if (!sections[currentSectionIndex] || !sections[currentSectionIndex].hasMeaningfulContent) {
      const nextVisibleIndex = visibleSectionIndices.find(i => i > currentSectionIndex) ?? visibleSectionIndices[0];
      if (nextVisibleIndex !== undefined && nextVisibleIndex !== currentSectionIndex) {
        setCurrentSectionIndex(nextVisibleIndex);
        window.history.replaceState(null, '', `#section-${sections[nextVisibleIndex].id}`);
      }
    }
  }, [currentSectionIndex, sections, visibleSectionIndices]);

  const currentSection = sections[currentSectionIndex];
  const currentVisibleIndex = visibleSectionIndices.indexOf(currentSectionIndex);
  const totalVisibleSections = visibleSections.length;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Table of Contents - Left Sidebar */}
        <aside className="lg:w-96 xl:w-[420px] flex-shrink-0 mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-8">
            <TableOfContents 
              sections={sections} 
              currentSectionIndex={currentSectionIndex}
              onSectionClick={setCurrentSectionIndex}
              visibleSectionIndices={visibleSectionIndices}
            />
          </div>
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <article className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
              <div className="max-w-4xl mx-auto">
                {/* Section Progress */}
                <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Section {currentVisibleIndex + 1} of {totalVisibleSections}</span>
                    <span>{Math.round(((currentVisibleIndex + 1) / totalVisibleSections) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentVisibleIndex + 1) / totalVisibleSections) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Current Section */}
                <BlogSection 
                  section={currentSection}
                />

                {/* Navigation Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={goToPreviousSection}
                      disabled={currentVisibleIndex === 0}
                      className={`
                        flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200
                        ${currentVisibleIndex === 0
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                          : 'bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105'
                        }
                      `}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous Section
                    </button>

                    <button
                      onClick={goToNextSection}
                      disabled={currentVisibleIndex === totalVisibleSections - 1}
                      className={`
                        flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200
                        ${currentVisibleIndex === totalVisibleSections - 1
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                          : 'bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105'
                        }
                      `}
                    >
                      Next Section
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeLineWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 