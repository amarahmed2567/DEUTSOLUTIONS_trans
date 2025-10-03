import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageInitializer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Function to get browser language and map it to supported languages
    const getBrowserLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      const langCode = browserLang.split('-')[0].toLowerCase();
      
      // Map browser languages to supported languages
      const languageMap = {
        'ar': 'ar', // Arabic
        'en': 'en', // English
        'de': 'de', // German
        // Add more mappings as needed
      };
      
      return languageMap[langCode] || 'en'; // Default to English if language not supported
    };

    // Function to get saved language preference or detect from browser
    const getInitialLanguage = () => {
      const savedLang = localStorage.getItem('i18nextLng');
      
      if (savedLang && ['en', 'ar', 'de'].includes(savedLang)) {
        return savedLang;
      }
      
      // If no saved preference, detect from browser
      const detectedLang = getBrowserLanguage();
      localStorage.setItem('i18nextLng', detectedLang);
      return detectedLang;
    };

    // Initialize language
    const initialLang = getInitialLanguage();
    
    if (i18n.language !== initialLang) {
      i18n.changeLanguage(initialLang);
    }
    
    // Set document direction and language
    document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = initialLang;
  }, [i18n]);

  return null; // This component doesn't render anything
};

export default LanguageInitializer; 