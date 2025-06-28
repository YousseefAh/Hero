import React from 'react';
import BlogHeader from '@/components/blog/BlogHeader';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSection from '@/components/blog/BlogSection';
import { getBlogMetadata } from '@/utils/blogUtils';

export const metadata = {
  title: 'PRO-G TRAINER ACQUISITION BIBLE',
  description: 'A comprehensive guide for professional trainers on client acquisition and business growth.'
};

export default function BlogPage() {
  const { sections, readingTime, totalLines } = getBlogMetadata();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BlogHeader 
        title="PRO-G TRAINER ACQUISITION BIBLE: THE ULTIMATE GUIDE"
        readingTime={readingTime}
        totalLines={totalLines}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Table of Contents - Left Sidebar */}
          <aside className="lg:w-96 xl:w-[420px] flex-shrink-0 mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-8">
              <TableOfContents sections={sections} />
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <article className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
                <div className="max-w-4xl mx-auto">
                  {sections.map((section, index) => (
                    <BlogSection 
                      key={index}
                      section={section}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
