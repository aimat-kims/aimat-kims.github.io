import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-aimat-primary' : 'text-gray-700';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="font-heading font-bold text-xl text-aimat-primary">AIMAT</Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className={`font-medium hover:text-aimat-primary ${isActive('/')}`}>{t('nav.home')}</Link>
              <Link to="/projects" className={`font-medium hover:text-aimat-primary ${isActive('/projects')}`}>{t('nav.projects')}</Link>
              <Link to="/team" className={`font-medium hover:text-aimat-primary ${isActive('/team')}`}>{t('nav.team')}</Link>
              <Link to="/publications" className={`font-medium hover:text-aimat-primary ${isActive('/publications')}`}>{t('nav.publications')}</Link>
              <Link to="/contact" className={`font-medium hover:text-aimat-primary ${isActive('/contact')}`}>{t('nav.contact')}</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? t('language.korean') : t('language.english')}
            </Button>
            <Button variant="outline" className="border-aimat-primary text-aimat-primary hover:bg-aimat-light">
              {t('nav.joinLab')}
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
            <Link to="/" className={`block py-2 font-medium hover:text-aimat-primary ${isActive('/')}`}>{t('nav.home')}</Link>
            <Link to="/projects" className={`block py-2 font-medium hover:text-aimat-primary ${isActive('/projects')}`}>{t('nav.projects')}</Link>
            <Link to="/team" className={`block py-2 font-medium hover:text-aimat-primary ${isActive('/team')}`}>{t('nav.team')}</Link>
            <Link to="/publications" className={`block py-2 font-medium hover:text-aimat-primary ${isActive('/publications')}`}>{t('nav.publications')}</Link>
            <Link to="/contact" className={`block py-2 font-medium hover:text-aimat-primary ${isActive('/contact')}`}>{t('nav.contact')}</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4 space-y-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center gap-2 mb-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? t('language.korean') : t('language.english')}
            </Button>
            <Button variant="outline" className="w-full border-aimat-primary text-aimat-primary hover:bg-aimat-light">
              {t('nav.joinLab')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
