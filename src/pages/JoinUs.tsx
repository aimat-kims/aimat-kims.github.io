import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, Microscope, Brain, Code } from 'lucide-react';

const JoinUs = () => {
  const { t } = useLanguage();

  const equipmentData = [
    {
      image: "/images/a100_gpu.png",
      name: t('equipments.a100')
    },
    {
      image: "/images/a6000_gpu.png", 
      name: t('equipments.a6000')
    },
    {
      image: "/images/rolling_mill-removebg-preview.png",
      name: t('equipments.rollingMill')
    },
    {
      image: "/images/larser_machine-removebg-preview.png",
      name: t('equipments.laserMachine')
    },
    {
      image: "/images/xrd-removebg-preview.png",
      name: t('equipments.xrd')
    },
    {
      image: "/images/automatic_3dsanner-removebg-preview.png",
      name: t('equipments.3dScanner')
    },
    {
      image: "/images/automatic_tensile_machine-removebg-preview.png",
      name: t('equipments.tensileMachine')
    },
    {
      image: "/images/servo_press-removebg-preview.png",
      name: t('equipments.servoPress')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-aimat-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aimat-primary to-aimat-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-3xl md:text-5xl mb-6">
              {t('joinUs.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('joinUs.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Position Opening Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-heading text-2xl md:text-3xl text-aimat-primary mb-4">
                  {t('joinUs.positionTitle')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {t('joinUs.positionSubtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Position Description */}
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-aimat-primary" />
                    {t('joinUs.descriptionTitle')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('joinUs.description')}
                  </p>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-aimat-primary" />
                    {t('joinUs.requirementsTitle')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>{t('joinUs.req1')}</li>
                    <li>{t('joinUs.req2')}</li>
                    <li>{t('joinUs.req3')}</li>
                    <li>{t('joinUs.req4')}</li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-aimat-primary" />
                    {t('joinUs.responsibilitiesTitle')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>{t('joinUs.resp1')}</li>
                    <li>{t('joinUs.resp2')}</li>
                    <li>{t('joinUs.resp3')}</li>
                    <li>{t('joinUs.resp4')}</li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="bg-aimat-light p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-aimat-primary" />
                    {t('joinUs.contactTitle')}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {t('joinUs.contactText')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <p className="font-medium text-aimat-primary">
                      Prof. Ho Won Lee
                    </p>
                    <Button 
                      className="bg-aimat-primary hover:bg-aimat-secondary"
                      onClick={() => window.location.href = 'mailto:h.lee@kims.re.kr'}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      h.lee@kims.re.kr
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-aimat-primary">
              {t('joinUs.benefitsTitle')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('joinUs.benefitsDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {equipmentData.map((equipment, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <p className="text-center text-sm font-medium text-gray-700">
                  {equipment.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
