import fs from 'fs';
import path from 'path';

// List of available blog posts
export const blogPosts = [
  {
    id: 'pro-g-trainer-bible',
    title: 'PRO-G TRAINER ACQUISITION BIBLE',
    description: 'A comprehensive guide for professional trainers on client acquisition and business growth.',
    file: '@the best one yet.md',
    date: '2024-03-20',
  },
  {
    id: 'pro-g-features',
    title: 'THE ULTIMATE PRO-G SALES GUIDE',
    description: 'Transform Your Coaching Business Into a Scalable Digital Empire',
    file: 'objective-of-proj.md',
    date: '2024-03-21',
  }
];

// Get blog post by ID
export function getBlogPostById(id) {
  return blogPosts.find(post => post.id === id);
}

// Get all blog posts
export function getAllBlogPosts() {
  return blogPosts;
} 