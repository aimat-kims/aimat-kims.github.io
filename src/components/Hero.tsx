import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Database, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-aimat-light py-16 md:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 lg:col-span-7 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/publications">
                <Button className="bg-aimat-primary hover:bg-aimat-secondary text-white font-medium px-6 py-3 rounded-lg">
                  {t('hero.exploreButton')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/join-us">
                <Button variant="outline" className="border-aimat-primary text-aimat-primary hover:bg-aimat-light">
                  {t('hero.joinButton')}
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-aimat-primary via-aimat-secondary to-aimat-accent p-1">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt={t('hero.imageAlt') || "AI Materials Research"} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <Zap className="text-aimat-primary h-6 w-6" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <Database className="text-aimat-secondary h-6 w-6" />
              </div>
              <div className="absolute -bottom-2 right-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <Lightbulb className="text-aimat-accent h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
