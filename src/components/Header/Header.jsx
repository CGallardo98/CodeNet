import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import { FaCode } from "react-icons/fa6";
import SearchBar from './SearchBar';  // Componente del buscador
import LanguageSwitcher from './LanguageSwitcher';  // Componente del selector de idioma
import './Header.css';

function Header({ setSearchQuery, user }) {
  return (
    <div className=''>
      <header className="header">
        {/* <div className="logo">
          <img src="https://i.ibb.co/wggkRsK/image-Photoroom.png" alt="Logo de Codenet" className="logo-image" />
          <div className="logo-text">
            <span className="main-title">CODENET</span>
            <span className="sub-title">LEARNING EXCHANGE</span>
          </div>
        </div> */}
        <div>
          <img src="/logo&slogan.svg" alt="CodeNet Logo" className='codenet-logo' />
        </div>

        <nav className="nav-links">
          <Link to="/">
            <FaHome className='nav-icon'/> Inicio
          </Link>
          <Link to={`/${user.username}`}>
            <FaUser className='nav-icon'/> Perfil
          </Link>
          <Link to="/nosotros">
            <FaCode className='nav-icon'/> Nosotros
          </Link>
        </nav>

        <SearchBar setSearchQuery={ setSearchQuery }/>  {/* Buscador */}
        <LanguageSwitcher />  {/* Selector de idioma */}
    </header>
    </div>
  );
}

export default Header;
