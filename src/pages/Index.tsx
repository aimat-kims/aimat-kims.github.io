import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectAreas from '@/components/ResearchAreas';
import TeamSection from '@/components/TeamSection';
import PublicationsSection from '@/components/PublicationsSection';
import ContactSection from '@/components/ContactSection';
import EquipmentSection from '@/components/EquipmentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectAreas />
        <TeamSection />
        <PublicationsSection />
        <EquipmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
