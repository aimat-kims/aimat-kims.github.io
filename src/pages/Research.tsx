import React from 'react';
import Navbar from '@/components/Navbar';
import ResearchAreas from '@/components/ResearchAreas';
import Footer from '@/components/Footer';

const Research = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center text-aimat-primary">Our Research</h1>
          <ResearchAreas />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;