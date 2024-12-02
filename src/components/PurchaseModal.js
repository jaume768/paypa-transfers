// src/components/PurchaseModal.js
import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import CountdownTimer from './CountdownTimer';
import { LanguageContext } from '../context/LanguageContext';
import './PurchaseModal.css';

Modal.setAppElement('#root');

const PurchaseModal = ({ closeModal, amount }) => {
    const { translations } = useContext(LanguageContext);
    const [email, setEmail] = useState('');
    const [isCounting, setIsCounting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsCounting(true);
        } else {
            alert(translations.modal.enterEmailAlert || 'Please enter your PayPal email.');
        }
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            contentLabel={translations.modal.confirmPurchase}
            className="modal"
            overlayClassName="overlay"
        >
            {!isCounting ? (
                <div>
                    <h2>{translations.modal.confirmPurchase}</h2>
                    <p>{translations.modal.bitcoinAddress}</p>
                    <code>0xACbE40651957312DA6862Abb6b648e95A637f6d1</code>
                    <form onSubmit={handleSubmit}>
                        <label>
                            {translations.modal.enterEmail}
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">{translations.modal.initiatePurchase}</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>{translations.modal.waitingTransfer}</h2>
                    <CountdownTimer minutes={8} />
                </div>
            )}
            <button className="close-button" onClick={closeModal}>
                {translations.modal.close}
            </button>
        </Modal>
    );
};

export default PurchaseModal;
