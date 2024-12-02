// src/context/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';

// Importa las traducciones
import en from '../translations/en.json';
import de from '../translations/de.json';
import es from '../translations/es.json'; // Importar traducción en español

// Crea el contexto
export const LanguageContext = createContext();

// Crea el proveedor del contexto
export const LanguageProvider = ({ children }) => {
    // Verifica si hay un idioma almacenado en localStorage
    const storedLanguage = localStorage.getItem('language') || 'en';

    const [language, setLanguage] = useState(storedLanguage);
    const [translations, setTranslations] = useState(en);

    useEffect(() => {
        // Actualiza las traducciones cuando cambia el idioma
        switch (language) {
            case 'de':
                setTranslations(de);
                break;
            case 'es':
                setTranslations(es);
                break;
            case 'en':
            default:
                setTranslations(en);
                break;
        }
        // Almacena el idioma seleccionado en localStorage
        localStorage.setItem('language', language);
    }, [language]);

    const value = {
        language,
        setLanguage,
        translations,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
