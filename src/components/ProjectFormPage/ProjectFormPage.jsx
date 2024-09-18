import './ProjectFormPage.css';
import { useState } from "react";
import CreatableSelect from 'react-select/creatable';

import ImgUploadBox from './ImgUploadBox';

export default function ProjectFormPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sourceFile, setSourceFile] = useState(null);
  const [githubLink, setGithubLink] = useState('');
  const [category, setCategory] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  /* const [categories, setCategories] = useState(['Git', 'Desarrollo Web', 'Front Stack', 'Full Stack']); */
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    const newOption = { value: newCategory, label: newCategory };
    setCategories((prev) => [...prev, newOption]);  // Add new category to options
    setCategory(newOption);  // Set the new category as selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log({ title, content, sourceCodeFile, projectUrl });
    if (category) {
      console.log("Category selected:", category.value);  // For testing purpose
      // Implement form submission logic here
    }
  };

  return (
    <div className='form-page'>
      <form onSubmit={handleSubmit} className='blog-entry-form'>
        <h1>Crea una entrada de Blog</h1>
        <ImgUploadBox/> {/* Componente para agregar imagen de portada */}

        <div className='columns'>
          <div className='left-column'>
            {/* Input para el título*/}
            <input 
              className='input title-input'
              type='text' 
              placeholder='Título'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Textarea para el contenido*/}
            <textarea 
              className='input content-input'
              placeholder='Escribe aquí el contenido de tu entrada'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* Botones para Publicar y Cancelar */}
            <div className="button-group">
            <button
                type="button" 
                className='cancel-btn' 
                onClick={() => { /* Cancel logic here */ }}>
                  Cancelar
              </button>
              <button 
                type="submit"
                className='publish-btn'
                onClick={() => { /* Cancel logic here */ }}>
                  Publicar
              </button>
            </div>
          </div>

          <div className='right-column'>
            {/* Input de archivo para el código fuente */}
            <div className="file-upload-box">
              Carpeta de código fuente
              <span className="file-icon">📁</span>
              <label htmlFor='file-uploads' >
                <div className='file-input-box'>
                  <img
                    className='file-upload-icon' 
                    src="" 
                    alt='Add File'
                  />
                  <div className='file-upload-text'>
                    Arrastra aquí para adjuntar o <span className='file-upload-link'>carga</span>
                 </div>
                 <div className='file-upload-size'>Tamaño máximo: 10MB</div>
                </div>
              </label>
              <input 
                type="file"
                id='file-uploads'
                onChange={(e) => setSourceFile(e.target.files[0])}
                style={{display: 'none'}}
              />
            </div>

            {/* Input para URL de GitHub */}
            <div className="link-input">
              <label className="link-label">
                Link Repositorio de GitHub
                <span className="link-icon">🔗</span>
              </label>
              <input
                type="url"
                placeholder="Añade el enlace de tu repositorio"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
              />
            </div>

            {/* Menú Dropdown para categorías*/}
            <div className='category-dropdown'>
              <label className="category-label">
                Elige las categorías
              </label>
              <CreatableSelect
                onChange={(option) => setCategory(option)}
                onCreateOption={handleAddCategory}
                options={categories}
                value={category}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={isFocused ? 'Crea una categoría' : 'Categoría'}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  }