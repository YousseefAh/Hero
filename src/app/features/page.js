"use client";
import React from "react";
import { StickyScroll } from "components/ui/sticky-scroll-reveal";
import PageWrapper from "components/layout/PageWrapper";
import Header from "components/layout/Header";
import Navigation from "components/layout/Navigation/Navigation";
import Footer from "components/layout/Footer";

// ==========================================
// CONFIGURABLE CONTENT - EDIT THIS SECTION
// ==========================================
const pageContent = [
  {
    text: "Fantasy Sports Analytics",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Get detailed fantasy sports analysis with our advanced analytics platform. Track player performance, predict outcomes, and make data-driven decisions for your fantasy teams."
  },
  {
    text: "Video Content Creation",
    img: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn professional video creation techniques from industry experts. Master editing, storytelling, and production skills to create engaging content that captivates your audience."
  },
  {
    text: "Personal Coaching",
    img: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Connect with experienced coaches who provide personalized guidance. Whether it's career development, skill building, or personal growth, get one-on-one mentorship tailored to your goals."
  },
  {
    text: "Digital Marketing Mastery",
    img: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Master the art of digital marketing with proven strategies. Learn SEO, social media marketing, content creation, and analytics to grow your online presence and reach your target audience."
  },
  {
    text: "Creative Photography",
    img: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover professional photography techniques and develop your unique visual style. Learn composition, lighting, post-processing, and business skills from renowned photographers."
  }
];

// Transform the configurable content into the format needed by StickyScroll
const content = pageContent.map((item, index) => ({
  title: item.text,
  description: item.description,
  content: (
    <div className="flex h-full w-full items-center justify-center text-white">
      <img
        src={item.img}
        width={300}
        height={300}
        className="h-full w-full object-cover rounded-lg"
        alt={item.text}
      />
    </div>
  ),
}));

export default function FeaturesPage() {
  return (
    <PageWrapper>
      <Header>
        <Navigation />
      </Header>
      
      <main className="w-full min-h-screen bg-white-shade">
        <div className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-24 pb-16 max-w-[90rem]">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-500 mb-6 transition-colors duration-300">
              Platform Features
            </h1>
            <p className="text-lg md:text-xl text-primary-300 max-w-3xl mx-auto transition-colors duration-300">
              Discover the powerful features that make our platform the perfect choice for creators and learners alike.
            </p>
          </div>
          
          <div className="w-full py-4">
            <StickyScroll content={content} />
          </div>
        </div>
      </main>

      <Footer />
    </PageWrapper>
  );
} 