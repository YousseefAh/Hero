import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export async function getSections(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const raw = fs.readFileSync(fullPath, 'utf-8');

  // Function to check if a section has meaningful content
  const hasMeaningfulContent = (html) => {
    const plainText = html.replace(/<[^>]*>/g, '').trim();
    return plainText.length > 0; // Content meaningful if it has any text after stripping HTML
  };

  const sections = [];
  let currentSection = {
    title: '',
    markdownContent: '',
    id: '',
  };

  // Split content by H2 headers. Using a regex to find all H2s in the raw markdown.
  const h2Regex = /^(##\s.*)/gm;
  const rawParts = raw.split(h2Regex);

  const processPromises = rawParts.map(async (part, index) => {
    if (part.startsWith('## ')) {
      if (currentSection.title || (index === 0 && currentSection.markdownContent)) { // Check for existing section or preamble
        if (hasMeaningfulContent(currentSection.markdownContent)) {
          sections.push({
            title: currentSection.title,
            htmlContent: (await remark().use(remarkHtml).process(currentSection.markdownContent)).toString(),
            id: currentSection.id,
            hasMeaningfulContent: true,
          });
        }
      }
      const title = part.substring(2).trim();
      currentSection = {
        title: title,
        markdownContent: '',
        id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, ''),
      };
    } else {
      // This is content for the current section or preamble
      currentSection.markdownContent += part;
    }
  });

  await Promise.all(processPromises);

  // Push the last section if it has meaningful content
  if (currentSection.title || currentSection.markdownContent) {
    if (hasMeaningfulContent(currentSection.markdownContent)) {
      sections.push({
        title: currentSection.title,
        htmlContent: (await remark().use(remarkHtml).process(currentSection.markdownContent)).toString(),
        id: currentSection.id,
        hasMeaningfulContent: true,
      });
    }
  }

  // Handle case where there are no H2s, but there is content.
  // Treat the entire document as one section, using the document title.
  if (sections.length === 0 && raw.trim().length > 0) {
    const metadata = getBlogMetadata(filePath);
    sections.push({
      title: metadata.title,
      htmlContent: (await remark().use(remarkHtml).process(raw)).toString(),
      id: metadata.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, ''),
      hasMeaningfulContent: true,
    });
  }

  // Ensure we have at least one section for the blog post, even if empty
  if (sections.length === 0) {
    const metadata = getBlogMetadata(filePath);
    sections.push({
      title: metadata.title || 'Untitled',
      htmlContent: '<p>No content available for this section.</p>',
      id: 'untitled-section',
      hasMeaningfulContent: false,
    });
  }

  return sections.filter(section => section.hasMeaningfulContent);
}

export function getBlogMetadata(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const lines = raw.split('\n');
  
  let title = '';
  let description = '';
  let date = '';
  let author = '';

  for (const line of lines) {
    if (line.startsWith('# ')) {
      title = line.substring(2).trim();
    } else if (line.startsWith('> **PURPOSE:**')) {
      description = line.substring('> **PURPOSE:**'.length).trim();
    } else if (line.startsWith('> **Created:**')) {
      date = line.substring('> **Created:**'.length).trim().split(' ')[0]; // Extract only the date part
    } else if (line.startsWith('> **Author:**')) {
      author = line.substring('> **Author:**'.length).trim();
    }
    if (title && description && date && author) break;
  }
  
  // Fallback to filename if title not found in markdown
  if (!title) {
    title = path.basename(filePath, '.md').replace(/[-_]/g, ' ');
  }

  return { title, description, date, author };
} 