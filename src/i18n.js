import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';
import deTranslations from './locales/de.json';

const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  },
  de: {
    translation: deTranslations
  }
};

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

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    lng: getInitialLanguage(), // Set initial language

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n; 