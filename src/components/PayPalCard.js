// src/components/PayPalCard.js
import React, { useState, useContext } from 'react';
import PurchaseModal from './PurchaseModal';
import { LanguageContext } from '../context/LanguageContext';
import './PayPalCard.css';

const PayPalCard = ({ card }) => {
    const { translations } = useContext(LanguageContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBuyClick = () => {
        if (card.inStock) {
            setIsModalOpen(true);
        } else {
            alert(translations.modal.outOfStock || 'This product is out of stock.');
        }
    };

    return (
        <div className="paypal-card">
            <h2>{translations[card.key].amount}</h2>
            <p>
                <strong>{translations[card.key].priceLabel}</strong> {translations[card.key].priceUSD} ({translations[card.key].priceBTC})
            </p>
            <p>{translations[card.key].stock}</p>
            <button onClick={handleBuyClick} disabled={!card.inStock}>
                {translations[card.key].buy}
            </button>
            {isModalOpen && (
                <PurchaseModal
                    closeModal={() => setIsModalOpen(false)}
                    amount={translations[card.key].amount}
                />
            )}
        </div>
    );
};

export default PayPalCard;
