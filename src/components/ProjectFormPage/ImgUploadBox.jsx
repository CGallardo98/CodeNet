
import React, { useState } from 'react';
import './ImgUploadBox.css';

// Caja para añadir la foto de portada de la entrada de blog
export default function ImgUploadBox() {
  const [selectedImage, setSelectedImage] = useState(null);

  //Recibe la info de la imagen seleccionada
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={`cover-img-container ${selectedImage ? 'image-selected' : ''}`}>
        {/* Crea una etiqueta para manejar el input de tipo file */}
        <label htmlFor="file-upload">
            {selectedImage ? (
            //Muestra la imagen seleccionada
            <img className="img-preview" 
            src={selectedImage} 
            alt="Image preview"
            />
            ) : (
            //Muestra el diálogo para seleccionar imagen
            <div className='img-upload-box'>
                <img
                    className="img-upload-icon"
                    src="/icons/add-image.png"
                    alt="Add Image"
                />
                <div className="img-upload-text">
                Adjuntar la imagen de la publicación o <span className="upload-link">carga</span>
                </div>
                <div className="upload-size">Tamaño Máximo: 10MB</div>
            </div>
            )}
        </label>

        {/* Crea el input de tipo file */}
        <input
            className='file-input'
            type='file'
            id='file-upload'
            accept='image/*'
            onChange={handleFileChange}
            style={{ display: 'none' }}
        />
    </div>
  );
}
