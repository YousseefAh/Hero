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
import StatsStrip from "@/components/sections/StatsStrip";
import AppleCardsCarouselDemo from "@/components/UI/apple-cards-carousel-demo";
import Features from "@/components/sections/Features";
import WobbleCardDemo from "@/components/UI/wobble-card-demo";
import ContinuousShowcase from "@/components/sections/ContinuousShowcase";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Pricing from "@/components/sections/Pricing/Pricing";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

// Footer
import Footer from "@/components/layout/Footer";

// UI
import Modal from "@/components/UI/Modal";
import MoreInformation from "@/components/UI/MoreInformation";



import AuroraBackground from "@/components/UI/AuroraBackground";

import { ModalContextProvider } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <ModalContextProvider>
        <PageWrapper>
          {/* ── Aurora zone — covers Header + Dashboard ── */}
          <div className="relative">
            <AuroraBackground />
            <Header>
              <Navigation />
              <Hero />
            </Header>
            <section id="dashboard"><Dashboard /></section>
          </div>

          <Main>
            <AppStatistics />
            <StatsStrip />
            <AppleCardsCarouselDemo />
            <section id="features"><Features /></section>
            <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-16 max-w-[90rem]">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-primary-500 mb-6">
                  {t.whyChoose.title}
                </h2>
                <p className="text-lg md:text-xl text-primary-300 max-w-3xl mx-auto">
                  {t.whyChoose.description}
                </p>
              </div>
              <WobbleCardDemo />
            </section>
            {/* <ContinuousShowcase /> */}
            <BeforeAfter />
            <section id="pricing"><Pricing /></section>
            {/* <Testimonials /> */}
            <FAQ />
            <section id="cta"><CTA /></section>
          </Main>

          <Footer />

          <Modal modalName="more-information">
            <MoreInformation />
          </Modal>
        </PageWrapper>
    </ModalContextProvider>
  );
}
