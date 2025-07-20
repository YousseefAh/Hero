"use client";

// App layout
import PageWrapper from "@/components/layout/PageWrapper";

// Header
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation/Navigation";
import Hero from "@/components/sections/Hero";

// Main
import Main from "@/components/layout/Main";
import Dashboard from "@/components/sections/Dashboard";
import AppStatistics from "@/components/sections/AppStatistics";
import AppleCardsCarouselDemo from "@/components/UI/apple-cards-carousel-demo";
import Features from "@/components/sections/Features";
import WobbleCardDemo from "@/components/UI/wobble-card-demo";
import ContinuousShowcase from "@/components/sections/ContinuousShowcase";
import Pricing from "@/components/sections/Pricing/Pricing";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import CTA from "@/components/sections/CTA";

// Footer
import Footer from "@/components/layout/Footer";

// UI
import Modal from "@/components/UI/Modal";
import MoreInformation from "@/components/UI/MoreInformation";

import { ModalContextProvider } from "@/contexts/ModalContext";
import { content } from '@/data/content';

export default function HomePage() {
  return (
    <ModalContextProvider>
      <PageWrapper>
        <Header>
          <Navigation />
          <Hero />
        </Header>

        <Main>
          <Dashboard />
          <AppStatistics />
          <AppleCardsCarouselDemo />
          <Features />
          <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-16 max-w-[90rem]">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-primary-500 mb-6 transition-colors duration-300">
                {content.whyChooseYadora.title}
              </h2>
              <p className="text-lg md:text-xl text-primary-300 max-w-3xl mx-auto transition-colors duration-300">
                {content.whyChooseYadora.description}
              </p>
            </div>
            <WobbleCardDemo />
          </section>
          <ContinuousShowcase />
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
          <CTA />
        </Main>

        <Footer />

        <Modal modalName="more-information">
          <MoreInformation />
        </Modal>
      </PageWrapper>
    </ModalContextProvider>
  );
} 