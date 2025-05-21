import React from 'react';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/use-scroll-top';

const Team = () => {
  // Use the hook to scroll to top when navigating to this page
  useScrollToTop();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-aimat-primary to-aimat-secondary py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-white">Our Team</h1>
            <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
              Meet the experts and researchers driving innovation in AI and materials science
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 pb-12">
          <TeamSection showAll={true} showSectionHeader={false} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;