import React from 'react';
import { useTranslation } from 'react-i18next';
import './TextHomeSlider.css';


const TextHomeSlider = () => {
  const { t } = useTranslation();
  return (
    <div className="text-slider-wrapper">
      <h1 className='text-slider-wrapper-title'>{t('home.textHomeSlider.title')} <span className='text-primary'>{t('home.textHomeSlider.spanText')}</span></h1>
      <p className='text-slider-wrapper-desc'>{t('home.textHomeSlider.description')}</p>
    </div>
  );
};

export default TextHomeSlider;
