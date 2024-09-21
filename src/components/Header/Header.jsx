import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import SearchBar from './SearchBar';  // Componente del buscador
import LanguageSwitcher from './LanguageSwitcher';  // Componente del selector de idioma
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://i.ibb.co/wggkRsK/image-Photoroom.png" alt="Logo de Codenet" className="logo-image" />
      <div className="logo-text">
        <span className="main-title">CODENET</span>
        <span className="sub-title">LEARNING EXCHANGE</span>
      </div>
      </div>

      <nav className="nav-links">
        <Link to="/">
          <FaHome /> Inicio
        </Link>
        <Link to="/profile">
          <FaUser /> Perfil
        </Link>
      </nav>

      <SearchBar />  {/* Buscador */}
      <LanguageSwitcher />  {/* Selector de idioma */}
    </header>
  );
}

export default Header;
