import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SellBooksSection from './components/SellBooksSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ErrorBoundary from '../../core/components/ErrorBoundary.jsx';
import Navbar from '../homepage/components/Navbar.jsx'; // ✅ import your navbar
import AdBanner from './components/AdBanner.jsx';
import FAQSection from '../contact/components/FAQSection.jsx';

export default function HomepageScreen() {
  return (
    <ErrorBoundary>
      <div className="relative overflow-hidden min-h-screen bg-white">
        {/* ✅ Background SVGs */}
        <img
          src="src/assets/bgsvg/hero-bg.svg"
          alt="Decoration"
          className="absolute top-0 right-0 w-[300px] opacity-50 pointer-events-none select-none"
        />
        <img
          src="src/assets/bgsvg/hero-bg2.svg"
          alt="Decoration"
          className="absolute top-[10px] left-[-70%] w-[600px] opacity-70 pointer-events-none select-none"
        />

        {/* ✅ Navbar (always on top of background) */}
        <Navbar />

        {/* ✅ Page Content */}
        <HeroSection />
        <AdBanner />
        <AboutSection />
        <SellBooksSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </ErrorBoundary>
  );
}
