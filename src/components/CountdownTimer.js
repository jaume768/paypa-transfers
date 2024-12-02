// src/components/CountdownTimer.js
import React, { useContext } from 'react';
import Countdown from 'react-countdown';
import { LanguageContext } from '../context/LanguageContext';
import './CountdownTimer.css';

const CountdownTimer = ({ minutes }) => {
    const { translations } = useContext(LanguageContext);

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            return <span className="countdown-completed">{translations.countdownCompleted || 'Time is up.'}</span>;
        } else {
            return (
                <div className="countdown-container">
                    <div className="countdown-box">
                        <span className="countdown-number">{minutes}</span>
                        <span className="countdown-label">{translations.minutes || 'Min'}</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-box">
                        <span className="countdown-number">{seconds < 10 ? `0${seconds}` : seconds}</span>
                        <span className="countdown-label">{translations.seconds || 'Sec'}</span>
                    </div>
                </div>
            );
        }
    };

    const totalTime = minutes * 60 * 1000; // Convertir a milisegundos

    return <Countdown date={Date.now() + totalTime} renderer={renderer} />;
};

export default CountdownTimer;
