
import React from 'react';
import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="font-heading font-bold text-2xl mb-4">AIMAT</div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered Materials Discovery Laboratory at the Korea Institute of Materials Science, 
              exploring generative deep learning models for materials discovery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:contact@aimat.kr" className="text-gray-300 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#research" className="text-gray-300 hover:text-white transition-colors">Research</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
              </li>
              <li>
                <a href="#publications" className="text-gray-300 hover:text-white transition-colors">Publications</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Research Data</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Open Positions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Collaborations</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">News & Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} AIMAT - Korea Institute of Materials Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
