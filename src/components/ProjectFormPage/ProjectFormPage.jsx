import './ProjectFormPage.css';
import '../../index.css';
import { useState } from "react";
import CreatableSelect from 'react-select/creatable';
import JSZip from 'jszip';
import ImgUploadBox from './ImgUploadBox';
import PreviewPopup from './PreviewPopup';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProjectFormPage() {

  const nav = useNavigate();

  const [coverImg, setCoverImg] = useState('')
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sourceFile, setSourceFile] = useState(null);
  const [githubLink, setGithubLink] = useState('');
  const [category, setCategory] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const initialCategories = [
    { value: 'Git', label: 'Git' },
    { value: 'Desarrollo Web', label: 'Desarrollo Web' },
    { value: 'Front Stack', label: 'Front Stack' },
    { value: 'Full Stack', label: 'Full Stack' }];

  const [categories, setCategories] = useState(initialCategories);
  const post = { coverImg, title, content, category, sourceFile, githubLink };

  //Función para añadir nuevas categorías
  const handleAddCategory = (newCategory) => {
    const newOption = { value: newCategory, label: newCategory };
    //Añade nueva categoría a las opciones
    setCategories((prev) => [...prev, newOption]); 
    //Selecciona la nueva categoría
    setCategory(newOption.value);
  };

  //Función para manejar el archivo zip de código fuente
  const handleZipUpload = async (e) => {
    const zipFile = e.target.files[0];
    const zip = new JSZip();
  
    if (zipFile) {
      try {
        const zipContent = await zip.loadAsync(zipFile);
        // Itera sobre los archivos del zip y los procesa
        zipContent.forEach((relativePath, file) => {
          console.log("File in zip:", relativePath);
        });
        //Guarda el archivo leído
        setSourceFile(zipFile);
      } catch (error) {
        console.error("Error reading zip file:", error);
      }
    }
  };

  const cancelPost = () => {
    alert("Estás seguro que deseas cancelar la publicación? Tu contenido se eliminará.")
    return nav('/');
  }

  const handlePreview = (e) => {
    e.preventDefault();
    
    // Valida que estén llenos los campos
    if (!coverImg || !title || !content || !category) {
      alert("Por favor, completa todos los campos obligatorios antes de enviar.");
      return;
    }
    // Set the post object and show the preview pop-up
    setShowPreview(true);  // This triggers the popup to be shown
  };
  const closePreview = () => {
    setShowPreview(false);  // This hides the popup
  };

  return (
    <div>
      <form onSubmit={handlePreview} className='blog-entry-form'>
        <h1>Crea una entrada de Blog</h1>
        {/* Componente para agregar imagen de portada */}
        <ImgUploadBox onImgSelect={(file) => setCoverImg(file)}/>

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
                onClick={cancelPost}>
                  Cancelar
              </button>
              <button 
                type="button"
                className='preview-btn'>
                  Vista previa
              </button>
              <button
                type="submit" 
                className='submit-btn'>
                  Publicar
              </button>
            </div>
          </div>

          <div className='right-column'>
            {/* Input de archivo para el código fuente */}
            <div className="file-upload-box">
              <div className='above-text'>
                Adjunta tu código fuente
                <img className="text-icon"
                src='/icons/code-icon.png'/>
              </div>
              {sourceFile ? (
                <>
                  {/* Muestra el nombre del archivo seleccionado: */}
                  <div className='file-upload-text uploaded'>
                    Archivo cargado: {sourceFile.name}
                    <button className='change-btn' 
                      onClick={() => document.getElementById('file-uploads').click()}>
                      Cambiar
                    </button>
                  </div>
                </>
              ) : (
                <label htmlFor='file-uploads' 
                  className='file-upload-label'>
                  {/* Muestra el diálogo para seleccionar archivo zip */}
                  <div className='file-input-box'>
                    <img
                      className='file-upload-icon' 
                      src="/icons/add-zip.png" 
                      alt='Add File'
                    />
                    <div className='file-upload-text'>
                      Arrastra aquí para adjuntar o <span className='file-upload-link'>carga</span>
                  </div>
                  <div className='file-upload-size'>Tamaño máximo: 10MB</div>
                  </div>
                 </label>
              )}
      
              <input 
                type="file"
                id='file-uploads'
                accept='.zip'
                onChange={handleZipUpload}
                style={{display: 'none'}}
              />
            </div>

            {/* Input para URL de GitHub */}
            <div className="link-input">
              <label className="link-label">
                <div className='above-text'>
                  O añade el link tu repositorio
                  <img className="text-icon"
                    src='/icons/github-icon.png'/>
                </div>
              </label>
              <input className='link-box'
                type="url"
                placeholder="https://github.com/username/repo_name.git"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
              />
            </div>

            {/* Menú Dropdown para categorías*/}
            <div className='category-dropdown'>
              <label className="above-text">
                Elige la categoría
              </label>
              <CreatableSelect className='dropdown'
                onChange={(option) => setCategory(option.value)}
                onCreateOption={handleAddCategory}
                options={categories}
                value={category ? { value: category, label: category } : null}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={isFocused ? 'Crea una categoría' : 'Categoría'}
              />
            </div>
          </div>
        </div>
      </form>
      {/* Show the PreviewPopup if showPreview is true */}
      <PreviewPopup 
        show={showPreview}  // Pass the show prop
        post={post}
        closePreview={closePreview} 
      />
    </div>
  );
}
