
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-heading font-bold text-xl text-aimat-primary">AIMAT</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#home" className="font-medium text-gray-700 hover:text-aimat-primary">Home</a>
              <a href="#research" className="font-medium text-gray-700 hover:text-aimat-primary">Research</a>
              <a href="#team" className="font-medium text-gray-700 hover:text-aimat-primary">Team</a>
              <a href="#publications" className="font-medium text-gray-700 hover:text-aimat-primary">Publications</a>
              <a href="#contact" className="font-medium text-gray-700 hover:text-aimat-primary">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button variant="outline" className="mr-2 border-aimat-primary text-aimat-primary hover:bg-aimat-light">
              Join Our Lab
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-aimat-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <a href="#home" className="block py-2 font-medium text-gray-700 hover:text-aimat-primary">Home</a>
            <a href="#research" className="block py-2 font-medium text-gray-700 hover:text-aimat-primary">Research</a>
            <a href="#team" className="block py-2 font-medium text-gray-700 hover:text-aimat-primary">Team</a>
            <a href="#publications" className="block py-2 font-medium text-gray-700 hover:text-aimat-primary">Publications</a>
            <a href="#contact" className="block py-2 font-medium text-gray-700 hover:text-aimat-primary">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4">
            <Button variant="outline" className="w-full border-aimat-primary text-aimat-primary hover:bg-aimat-light">
              Join Our Lab
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
