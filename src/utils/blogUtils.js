import fs from 'fs';
import path from 'path';

export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

function cleanText(text) {
  // Remove HTML-like tags and CSS classes
  text = text.replace(/<\/?span[^>]*>/g, '');
  text = text.replace(/text-gray-\d+/g, '');
  text = text.replace(/class="[^"]*"/g, '');
  
  // Clean up strange characters and markdown (but preserve asterisks for processing)
  text = text.replace(/["""]/g, '"');
  text = text.replace(/\s*\}\}\s*\/>/g, '');
  text = text.replace(/\s*\}\}\s*\}/g, '');
  text = text.replace(/"\s*\}\}/g, '"');
  text = text.replace(/\{\{\s*/g, '');
  text = text.replace(/\s*\}\s*/g, '');
  text = text.replace(/\s*\{\s*/g, '');
  text = text.replace(/`/g, '');
  
  return text;
}

function formatText(text, isHeader = false) {
  text = cleanText(text);

  // Process markdown formatting for both headers and regular text
  // Convert markdown emphasis to styled spans - ORDER MATTERS!
  // Process triple asterisks first, then double, then single
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-indigo-700 dark:text-indigo-300 font-bold">$1</strong>');
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-gray-50 font-bold">$1</strong>');
  text = text.replace(/\*(.*?)\*/g, '<em class="text-gray-800 dark:text-gray-200 italic">$1</em>');

  if (isHeader) {
    return text;
  }
  
  // Handle numbered lists with better formatting
  text = text.replace(/^\d+\.\s+/g, (match) => {
    return `<span class="inline-block font-semibold text-indigo-600 dark:text-indigo-400 mr-2 min-w-[1.5rem]">${match}</span>`;
  });
  
  // Format arrows and special characters
  text = text.replace(/\s*->\s*/g, ' → ');
  text = text.replace(/\s*-->\s*/g, ' → ');
  text = text.replace(/\s*=>\s*/g, ' → ');
  
  // Clean up spacing
  text = text.replace(/\s+/g, ' ').trim();
  text = text.replace(/([.!?])\s*(?=\S)/g, '$1 ');
  
  return text;
}

function processCodeBlocks(lines) {
  const processedLines = [];
  let inCodeBlock = false;
  let codeBlockContent = [];
  let bulletList = [];
  let inBulletList = false;

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    
    // Handle bullet points
    if (trimmedLine.match(/^[-•]\s/)) {
      if (!inBulletList) {
        if (bulletList.length > 0) {
          processedLines.push(
            '<div class="space-y-3 my-6">' +
            bulletList.map(item => 
              `<div class="flex items-start group p-3 hover:bg-slate-800/50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                <span class="text-indigo-500 dark:text-indigo-400 mr-3 text-lg flex-shrink-0 mt-0.5">•</span>
                <div class="text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors leading-relaxed">${item}</div>
              </div>`
            ).join('') +
            '</div>'
          );
          bulletList = [];
        }
        inBulletList = true;
      }
      bulletList.push(formatText(trimmedLine.substring(2)));
      return;
    } else if (inBulletList && trimmedLine === '') {
      if (bulletList.length > 0) {
        processedLines.push(
          '<div class="space-y-3 my-6">' +
          bulletList.map(item => 
            `<div class="flex items-start group p-3 hover:bg-slate-800/50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
              <span class="text-indigo-500 dark:text-indigo-400 mr-3 text-lg flex-shrink-0 mt-0.5">•</span>
              <div class="text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors leading-relaxed">${item}</div>
            </div>`
          ).join('') +
          '</div>'
        );
        bulletList = [];
      }
      inBulletList = false;
    }

    // Handle code blocks
    if (trimmedLine.startsWith('```')) {
      if (inCodeBlock) {
        const codeContent = codeBlockContent.join('\n')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export)\b/g, 
            '<span class="text-purple-600 dark:text-purple-400">$1</span>')
          .replace(/\b(true|false|null|undefined|this)\b/g, 
            '<span class="text-amber-600 dark:text-amber-400">$1</span>')
          .replace(/("[^"]*"|'[^']*'|`[^`]*`)/g, 
            '<span class="text-emerald-600 dark:text-emerald-400">$1</span>')
          .replace(/\b(\d+)\b/g, 
            '<span class="text-blue-600 dark:text-blue-400">$1</span>');

        processedLines.push(
          '<div class="bg-slate-800/30 dark:bg-slate-800/30 rounded-lg overflow-hidden my-6 shadow-sm">' +
          '<div class="px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 text-sm text-slate-300 dark:text-slate-300 border-b border-slate-700 dark:border-slate-700">Code</div>' +
          '<pre class="p-4 overflow-x-auto">' +
          '<code class="font-mono text-sm leading-relaxed">' +
          codeContent +
          '</code></pre></div>'
        );
        codeBlockContent = [];
      }
      inCodeBlock = !inCodeBlock;
    } else if (inCodeBlock) {
      codeBlockContent.push(line);
    } else if (!inBulletList) {
      // Handle quotes
      if (trimmedLine.startsWith('>')) {
        processedLines.push(
          `<blockquote class="border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 py-4 my-6 bg-slate-800/30 dark:bg-slate-800/30 rounded-r-lg">
            <div class="text-gray-200 dark:text-gray-200 italic leading-relaxed text-lg">${formatText(trimmedLine.substring(1))}</div>
          </blockquote>`
        );
      } else if (trimmedLine !== '') {
        const formattedText = formatText(trimmedLine);
        if (formattedText.includes('→')) {
          // Special handling for sections with arrows
          const [left, right] = formattedText.split('→').map(s => s.trim());
          processedLines.push(
            `<div class="flex items-center space-x-4 text-lg my-5 bg-slate-800/30 dark:bg-slate-800/30 p-4 rounded-lg border-l-2 border-indigo-500 dark:border-indigo-500">
              <div class="font-bold text-gray-100 dark:text-gray-100 min-w-[120px] flex-shrink-0">${left}</div>
              <span class="text-indigo-400 dark:text-indigo-400 text-xl">→</span>
              <div class="text-gray-200 dark:text-gray-200 leading-relaxed">${right}</div>
            </div>`
          );
        } else if (formattedText.includes(':') && !formattedText.startsWith('<')) {
          // Special handling for key-value pairs
          const colonIndex = formattedText.indexOf(':');
          const key = formattedText.substring(0, colonIndex);
          const value = formattedText.substring(colonIndex + 1).trim();
          
          processedLines.push(
            `<div class="flex flex-wrap items-baseline my-4 group hover:bg-slate-800/50 dark:hover:bg-slate-700/50 p-4 rounded-lg transition-colors border-l-2 border-transparent hover:border-indigo-500 dark:hover:border-indigo-500">
              <div class="font-bold text-gray-100 dark:text-gray-100 mr-4 min-w-[180px] flex-shrink-0">${key}:</div>
              <div class="text-gray-200 dark:text-gray-200 flex-1 leading-relaxed">${value}</div>
            </div>`
          );
        } else {
          processedLines.push(
            `<div class="text-gray-200 dark:text-gray-200 my-4 leading-relaxed text-lg">${formattedText}</div>`
          );
        }
      } else {
        processedLines.push('');
      }
    }
  });

  // Handle any remaining bullet points
  if (bulletList.length > 0) {
    processedLines.push(
      '<div class="space-y-3 my-6">' +
      bulletList.map(item => 
        `<div class="flex items-start group p-3 hover:bg-slate-800/50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
          <span class="text-indigo-500 dark:text-indigo-400 mr-3 text-lg flex-shrink-0 mt-0.5">•</span>
          <div class="text-gray-200 dark:text-gray-200 group-hover:text-gray-100 dark:group-hover:text-gray-100 transition-colors leading-relaxed">${item}</div>
        </div>`
      ).join('') +
      '</div>'
    );
  }

  return processedLines;
}

export function getSections(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const lines = raw.split('\n');

  const sections = [];
  let current = { header: 'Introduction', level: 1, lines: [] };

  const pushCurrent = () => {
    if (current.lines.length > 0 || current.header) {
      current.lines = processCodeBlocks(current.lines);
      
      // Filter out empty sections or sections with only minimal content
      const hasContent = current.lines.some(line => {
        const strippedLine = typeof line === 'string' ? line.replace(/<[^>]*>/g, '').trim() : '';
        return strippedLine.length > 0 && strippedLine !== '—' && strippedLine !== '-';
      });
      
      // Only add sections that have meaningful content or are important headers
      if (hasContent || (current.header && current.header !== '—' && current.header.trim().length > 0)) {
        sections.push({ ...current });
      }
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const isHeading = /^#{1,6}\s/.test(trimmed);
    const isHR = /^-{3,}$/.test(trimmed);

    if (isHeading || isHR) {
      pushCurrent();

      if (isHeading) {
        const level = (trimmed.match(/^#+/) || [''])[0].length;
        // Extract header text and clean it properly
        let headerText = trimmed.replace(/^#{1,6}\s*/, '');
        
        // Remove asterisks that wrap the entire header text
        headerText = headerText.replace(/^\*+(.*?)\*+$/, '$1');
        
        // Now process any remaining markdown formatting
        const header = formatText(headerText, true);
        
        current = {
          header,
          level,
          lines: [],
        };
      } else {
        // Skip horizontal rule sections as they're usually just separators
        current = { header: '—', level: 2, lines: [] };
      }
    } else {
      current.lines.push(line);
    }
  });

  pushCurrent();
  
  // Final filter to remove any remaining empty sections
  return sections.filter(section => {
    if (!section.header || section.header === '—') return false;
    
    const hasValidContent = section.lines.some(line => {
      const strippedLine = typeof line === 'string' ? line.replace(/<[^>]*>/g, '').trim() : '';
      return strippedLine.length > 3; // Must have more than just a few characters
    });
    
    return hasValidContent || section.header.trim().length > 0;
  });
}

export function getBlogMetadata(filePath) {
  const sections = getSections(filePath);
  const allText = sections.map(s => s.lines.join('\n')).join('\n');
  const readingTime = calculateReadingTime(allText);
  const totalLines = sections.reduce((acc, section) => acc + section.lines.length, 0);

  return {
    sections,
    readingTime,
    totalLines,
  };
} 