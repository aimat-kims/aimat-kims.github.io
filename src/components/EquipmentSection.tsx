import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EquipmentSection = () => {
  const { t } = useLanguage();

  return (
    <section id="equipment" className="bg-gradient-to-b from-white to-aimat-light">
      <div className="container-section">
        <div className="mt-16 md:mt-24">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-center">
            {t('equipments.title')}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {t('equipments.description')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/a100_gpu.png" alt={t('equipments.a100')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.a100')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/a6000_gpu.png" alt={t('equipments.a6000')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.a6000')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/rolling_mill-removebg-preview.png" alt={t('equipments.rollingMill')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.rollingMill')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/larser_machine-removebg-preview.png" alt={t('equipments.laserMachine')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.laserMachine')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/xrd-removebg-preview.png" alt={t('equipments.xrd')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.xrd')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/automatic_3dsanner-removebg-preview.png" alt={t('equipments.3dScanner')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.3dScanner')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/automatic_tensile_machine-removebg-preview.png" alt={t('equipments.tensileMachine')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.tensileMachine')}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img src="/images/servo_press-removebg-preview.png" alt={t('equipments.servoPress')} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{t('equipments.servoPress')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;