import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const LANGUAGES = ['en', 'hi', 'pa'];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // react: {
    //   wait: true,
    // },
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    whitelist: LANGUAGES,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n;
