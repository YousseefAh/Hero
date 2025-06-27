"use client";

// App layout
import PageWrapper from "components/layout/PageWrapper";

// Header
import Header from "components/layout/Header";
import Navigation from "components/layout/Navigation/Navigation";
import Hero from "components/sections/Hero";
import HeroParallaxDemo from "components/ui/hero-parallax-demo";

// Main
import Main from "components/layout/Main";
import Dashboard from "components/sections/Dashboard";
import AppStatistics from "components/sections/AppStatistics";
import AppleCardsCarouselDemo from "components/ui/apple-cards-carousel-demo";
import Features from "components/sections/Features";
import Pricing from "components/sections/Pricing/Pricing";
import Testimonials from "components/sections/Testimonials/Testimonials";
import CTA from "components/sections/CTA";

// Footer
import Footer from "components/layout/Footer";

// UI
import Modal from "components/UI/Modal";
import MoreInformation from "components/UI/MoreInformation";

import { ModalContextProvider } from "contexts/ModalContext";

export default function HomePage() {
  return (
    <ModalContextProvider>
      <PageWrapper>
        <HeroParallaxDemo />
        <Header>
          <Navigation />
          <Hero />
        </Header>

        <Main>
          <Dashboard />
          <AppStatistics />
          <AppleCardsCarouselDemo />
          <Features />
          <Pricing />
          <Testimonials />
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