import fs from 'fs';
import path from 'path';
import React from 'react';

export const metadata = {
  title: 'PRO-G Trainer Acquisition Bible',
  description: 'Full text of the acquisition bible rendered with collapsible sections.'
};

/**
 * Reads the markdown file and splits it into sections based on heading lines (lines that start with #) or horizontal rules (---).
 * This guarantees that all 973 lines are preserved in order while giving the reader the ability to expand/collapse each part.
 */
function getSections() {
  const filePath = path.join(process.cwd(), '@the best one yet.md');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const lines = raw.split('\n');

  const sections = [];
  let current = { header: 'Introduction', lines: [] };

  const pushCurrent = () => {
    // Only push if there is any content collected
    if (current.lines.length > 0 || current.header) {
      sections.push({ ...current });
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    // Treat top-level headings (#, ##, ###, etc.) or standalone --- as new section delimiters
    const isHeading = /^#{1,6}\s/.test(trimmed);
    const isHR = /^-{3,}$/.test(trimmed);

    if (isHeading || isHR) {
      pushCurrent();

      if (isHeading) {
        current = {
          header: trimmed.replace(/^#{1,6}\s*/, ''),
          lines: [],
        };
      } else {
        // horizontal rule – use as section separator with the same header but visual divider
        current = { header: '—', lines: [] };
      }
    } else {
      current.lines.push(line);
    }
  });

  // push the last collected section
  pushCurrent();

  return sections;
}

export default function BlogPage() {
  const sections = getSections();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl md:text-7xl font-extrabold text-center mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
        PRO-G TRAINER ACQUISITION BIBLE
      </h1>
      <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-20 max-w-3xl mx-auto leading-relaxed">
        This page contains the complete 973-line document, structured for easy navigation.
        All sections are expanded by default for full readability.
      </p>

      <div className="space-y-8 max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <details
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl"
            open={true}
          >
            <summary className="cursor-pointer select-none py-5 px-6 font-bold text-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white dark:from-blue-700 dark:to-indigo-800 hover:opacity-90 transition-opacity duration-200 flex justify-between items-center">
              <span>{section.header || `Section ${index + 1}`}</span>
              <span className="ml-4 text-white text-base opacity-75">({section.lines.length} lines)</span>
            </summary>
            <pre className="whitespace-pre-wrap p-6 font-sans text-lg leading-relaxed text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800">
              {section.lines.join('\n')}
            </pre>
          </details>
        ))}
      </div>
    </div>
  );
}
