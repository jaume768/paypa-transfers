// src/components/LanguageSwitcher.js
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lng) => {
        setLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button
                onClick={() => handleLanguageChange('en')}
                className={language === 'en' ? 'active' : ''}
            >
                EN
            </button>
            <button
                onClick={() => handleLanguageChange('de')}
                className={language === 'de' ? 'active' : ''}
            >
                DE
            </button>
            <button
                onClick={() => handleLanguageChange('es')}
                className={language === 'es' ? 'active' : ''}
            >
                ES
            </button>
        </div>
    );
};

export default LanguageSwitcher;
