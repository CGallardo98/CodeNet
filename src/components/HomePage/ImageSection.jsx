import React from 'react';
import './ImageSection.css';
import { Link } from 'react-router-dom';

const ImageSection = () => {
  return (
    <div className="image-section-container">
      <div className="left-image">
        <img src="https://i.postimg.cc/FzCz3Vfc/intro3.png" alt="Main" className="main-image"/>
      </div>
      <div className="right-image-section">
        <img src="https://i.ibb.co/wggkRsK/image-Photoroom.png" alt="Codenet Logo" className="logo-image2"/>
        <div className="text-below-logo">
          <span>CODENET</span>
          <span className="sub-text">LEARNING EXCHANGE</span>
        </div>
        <Link to="/blog-entry/create">
          <button className="create-entry-button">Crea tu entrada</button>
        </Link>
      </div>
    </div>
  );
}

export default ImageSection;
