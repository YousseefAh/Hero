"use client";
import React from "react";
import { StickyScroll } from "components/ui/sticky-scroll-reveal";
import Link from "next/link";

// ==========================================
// CONFIGURABLE CONTENT - EDIT THIS SECTION
// ==========================================
const pageContent = [
  {
    text: "Fantasy Sports Analytics",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Transform your fantasy sports experience with our cutting-edge analytics platform. Our advanced algorithms analyze player performance, injury reports, weather conditions, and historical data to provide you with actionable insights. Track real-time statistics, predict player outcomes with machine learning models, and make data-driven decisions that give you the competitive edge. Whether you're managing multiple leagues or focusing on daily fantasy, our comprehensive dashboard provides everything you need to dominate your competition and maximize your winnings."
  },
  {
    text: "Video Content Creation",
    img: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Master the art of professional video creation with comprehensive training from industry veterans. Learn advanced editing techniques using industry-standard software, discover the secrets of compelling storytelling that keeps audiences engaged, and understand the technical aspects of production including lighting, sound design, and cinematography. Our curriculum covers everything from concept development and scriptwriting to post-production workflows and distribution strategies. Build a portfolio that showcases your unique vision and technical expertise."
  },
  {
    text: "Personal Coaching",
    img: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Accelerate your personal and professional growth with personalized coaching from experienced mentors who have achieved success in their respective fields. Our coaches provide tailored guidance based on your specific goals, challenges, and learning style. Whether you're looking to advance your career, develop new skills, improve leadership capabilities, or navigate life transitions, our one-on-one sessions offer the support and accountability you need. Benefit from proven frameworks, actionable strategies, and ongoing support that helps you achieve breakthrough results."
  },
  {
    text: "Digital Marketing Mastery",
    img: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Become a digital marketing expert with our comprehensive training program that covers all aspects of modern online marketing. Master search engine optimization (SEO) techniques that drive organic traffic, learn social media marketing strategies that build engaged communities, and understand content marketing principles that convert prospects into customers. Dive deep into analytics and data interpretation, email marketing automation, paid advertising campaigns, and conversion optimization. Our hands-on approach ensures you gain practical experience with real campaigns and measurable results."
  },
  {
    text: "Creative Photography",
    img: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Develop your unique photographic vision through comprehensive training that combines technical mastery with artistic expression. Learn advanced composition techniques, master natural and artificial lighting setups, and understand the nuances of different photography genres including portrait, landscape, street, and commercial photography. Our curriculum includes extensive post-processing training using industry-standard software, business development strategies for professional photographers, and portfolio development guidance. Work with professional equipment and learn from award-winning photographers who share their expertise and creative insights."
  },
  {
    text: "AI & Machine Learning",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dive into the revolutionary world of artificial intelligence and machine learning with hands-on training from industry experts. Learn Python programming, data preprocessing, neural networks, and deep learning frameworks like TensorFlow and PyTorch. Master computer vision, natural language processing, and predictive analytics. Build real-world AI applications, understand ethical AI principles, and prepare for the future of technology. Our comprehensive curriculum includes practical projects, industry case studies, and career guidance to help you become an AI specialist in high demand."
  },
  {
    text: "Blockchain Development",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Master blockchain technology and cryptocurrency development with comprehensive training in decentralized applications (DApps), smart contracts, and Web3 development. Learn Solidity programming, Ethereum development, DeFi protocols, and NFT creation. Understand blockchain architecture, consensus mechanisms, and security best practices. Build your own cryptocurrency, create smart contracts, and develop decentralized applications. Our expert instructors guide you through real-world projects and help you navigate the rapidly evolving blockchain ecosystem."
  },
  {
    text: "UX/UI Design Excellence",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Create exceptional user experiences with our comprehensive UX/UI design program. Learn user research methodologies, wireframing, prototyping, and usability testing. Master design tools like Figma, Adobe XD, and Sketch while understanding design systems, accessibility principles, and mobile-first design. Develop skills in user psychology, information architecture, and interaction design. Work on real client projects, build an impressive portfolio, and learn from seasoned designers who have worked with top tech companies and startups."
  },
  {
    text: "Creative Photography",
    img: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Develop your unique photographic vision through comprehensive training that combines technical mastery with artistic expression. Learn advanced composition techniques, master natural and artificial lighting setups, and understand the nuances of different photography genres including portrait, landscape, street, and commercial photography. Our curriculum includes extensive post-processing training using industry-standard software, business development strategies for professional photographers, and portfolio development guidance. Work with professional equipment and learn from award-winning photographers who share their expertise and creative insights."
  }
];

// Transform the configurable content into the format needed by StickyScroll
const content = pageContent.map((item, index) => ({
  title: item.text,
  description: item.description,
  content: (
    <img
      src={item.img}
      className="h-full w-full object-cover"
      alt={item.text}
    />
  ),
}));

export default function FeaturesPage() {
  return (
    <>
      <Link 
        href="/" 
        className="fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-200"
        aria-label="Back to home"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className="w-6 h-6 text-white"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </Link>
      <StickyScroll content={content} />
    </>
  );
} 