import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';

import uk from '../locales/uk.json';
import en from '../locales/en.json';

const languageDetector = new LanguageDetector(null, {
  order: ['path', 'cookie'],
});

i18n
  // .use(Backend)
  .use(languageDetector)
  .use(intervalPlural)
  // .use(initReactI18next)
  .init({
    fallbacks: true,
    fallbackLng: 'uk',
    whitelist: ['uk', 'en'],
    debug: true,
    resources: {
      uk: {
        translation: uk
      },
      en: {
        translation: en
      },
    },
    // backend: {
    //   loadPath: `/locales/{{lng}}/{{ns}}.json`,
    // },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      wait: true,
    },
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'span']
  });


export default i18n;
