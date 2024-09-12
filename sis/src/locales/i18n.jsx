import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationHI from './hi/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  hi: {
    translation: translationHI
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
