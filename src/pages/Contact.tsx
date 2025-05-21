import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-12 text-center text-aimat-primary">Contact Us</h1>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;