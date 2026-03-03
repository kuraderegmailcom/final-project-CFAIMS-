import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('language');
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang);
        }
    }, [i18n]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return { currentLanguage: i18n.language, changeLanguage };
};
