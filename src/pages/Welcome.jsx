import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/welcome/HeroSection';
import FeaturesSection from '../components/welcome/FeaturesSection';
import AtractionSection from '../components/welcome/AtractionSection';
import Footer from '../components/Footer';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <AtractionSection />
      </main>

      <Footer />

    </div>
  );
}