// src/App.js
import React from 'react';
import LandingPage from './components/LandingPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <LandingPage />
    </div>
  );
}

export default App;
