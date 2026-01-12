
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendSection from './components/TrendSection';
import ArchitectureSection from './components/ArchitectureSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-dark-navy text-light-slate font-sans overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <TrendSection />
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
