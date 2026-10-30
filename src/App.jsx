import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import SavingsCalculator from './components/SavingsCalculator';
import Pricing from './components/Pricing';
import AboutTestimonials from './components/AboutTestimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    mode: 'signup', // 'signup' | 'login'
  });

  const handleOpenAuth = (mode = 'signup') => {
    setAuthModal({
      isOpen: true,
      mode,
    });
  };

  const handleCloseAuth = () => {
    setAuthModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-[#F0F8F3] text-[#26352D] font-sans selection:bg-[#126B46] selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Hero Section */}
        <Hero onOpenAuth={handleOpenAuth} />

        {/* Features Section */}
        <Features onOpenAuth={handleOpenAuth} />

        {/* How It Works Section */}
        <HowItWorks onOpenAuth={handleOpenAuth} />

        {/* Dashboard Preview Section */}
        <DashboardPreview onOpenAuth={handleOpenAuth} />

        {/* Interactive Savings Simulator */}
        <SavingsCalculator onOpenAuth={handleOpenAuth} />

        {/* Transparent Pricing Plans */}
        <Pricing onOpenAuth={handleOpenAuth} />

        {/* About & Social Proof Testimonials */}
        <AboutTestimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Call to Action Section */}
        <CTASection onOpenAuth={handleOpenAuth} />
      </main>

      {/* Footer */}
      <Footer onOpenAuth={handleOpenAuth} />

      {/* Interactive Authentication Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={handleCloseAuth}
      />
    </div>
  );
}
