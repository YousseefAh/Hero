import React from 'react';
import { getBlogPostById } from '@/utils/blogPosts';
import { getBlogMetadata } from '@/utils/blogUtils';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogClient from '@/components/blog/BlogClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = getBlogPostById(params.id);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostById(params.id);
  
  if (!post) {
    notFound();
  }

  const { sections, readingTime, totalLines } = getBlogMetadata(post.file);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BlogHeader 
        title={post.title}
        readingTime={readingTime}
        totalLines={totalLines}
      />
      
      <BlogClient 
        sections={sections}
        readingTime={readingTime}
        totalLines={totalLines}
      />
    </div>
  );
} 