import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'
import arabic from '../local/ar.json'
import english from '../local/en.json'

const lang = localStorage.getItem('lang') || 'ar'

const resources = {
    en: {
        translation: english
    },
    ar: {
        translation: arabic
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: lang,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        }
    });


export default i18n;