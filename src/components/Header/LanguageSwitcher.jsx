import React, { useState } from 'react';
import './Header.css';

function LanguageSwitcher() {
  const [language, setLanguage] = useState('ESP');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ESP' ? 'ENG' : 'ESP'));
  };

  return (
    <div className="language-switcher">
      {language === 'ESP' ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"
          alt="Bandera de España"
          onClick={toggleLanguage}
          className="flag-icon"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="Bandera de USA"
          onClick={toggleLanguage}
          className="flag-icon"
        />
      )}
    </div>
  );
}

export default LanguageSwitcher;
