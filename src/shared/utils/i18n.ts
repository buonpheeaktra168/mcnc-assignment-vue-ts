import { createI18n, useI18n } from "vue-i18n";
import en from '@/locales/en.json'
import km from '@/locales/km.json'

const messages = {
    en: en,
    km: km,
}

const lang = localStorage.getItem('lang') || 'en';

// 2. Create i18n instance with options
const i18n = createI18n({
    locale: lang || 'en', // set locale
    fallbackLocale: 'km', // set fallback locale
    messages, // set locale messages
})

export default i18n;
