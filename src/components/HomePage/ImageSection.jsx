import React from 'react';
import './ImageSection.css';
import { Link } from 'react-router-dom';

const ImageSection = () => {
  return (
    <div className="image-section-container">
      <img src="https://i.postimg.cc/FzCz3Vfc/intro3.png" alt="Main" className='left-image'/>
      <div className="right-image-section">
        <img src="https://i.postimg.cc/SR5FVMV3/image-Photoroom.png" alt="Codenet Logo" className="logo-image2"/>
        <div className="text-below-logo">
        </div>
        <Link to="/entry/new">
          <button className="create-entry-button">Crea tu entrada</button>
        </Link>
      </div>
    </div>
  );
}

export default ImageSection;
