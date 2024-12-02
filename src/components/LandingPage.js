// src/components/LandingPage.js
import React, { useContext } from 'react';
import PayPalCard from './PayPalCard';
import { LanguageContext } from '../context/LanguageContext';
import './LandingPage.css';

const cardData = [
    {
        id: 1,
        key: 'card1',
        inStock: true,
        usdPrice: 50,
        btcPrice: '0.00051',
    },
    {
        id: 2,
        key: 'card2',
        inStock: false,
        usdPrice: 150,
        btcPrice: '0.0015',
    },
    {
        id: 3,
        key: 'card3',
        inStock: false,
        usdPrice: 300,
        btcPrice: '0.0031',
    },
];

const LandingPage = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="landing-page">
            <h1>{translations.title}</h1>
            <div className="cards-container">
                {cardData.map((card) => (
                    <PayPalCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
