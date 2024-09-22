
import React, { useEffect, useState } from 'react';
import './ProjectFormPage.css';
import '../../index.css';
import CreatableSelect from 'react-select/creatable';
import JSZip from 'jszip';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImgUploadBox from './ImgUploadBox';
import PreviewPopup from './PreviewPopup';
import { useNavigate } from 'react-router-dom';


export default function ProjectFormPage({ addBlogEntry }) {

  const navigate = useNavigate();

  const [newEntry, setNewEntry] = useState({
    title: '',
    coverImg: '',
    category: null,
    author: 'Grupo 14 Bootcamp de Programación Talento Tech Oriente',
    content: '',
    sourceFile: null,
    githubLink: '',
    date: null,
  })

  const [isFocused, setIsFocused] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const initialCategories = [
    { value: 'React', label: 'React' },
    { value: 'Git', label: 'Git' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'Desarrollo Web', label: 'Desarrollo Web' },
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Full Stack', label: 'Full Stack' },
    { value: 'Python', label: 'Python' },
  ];
  const [categories, setCategories] = useState(initialCategories);

  //Función para añadir nuevas categorías
  const handleAddCategory = (newCategory) => {
    const newOption = { value: newCategory, label: newCategory };
    setCategories((prev) => [...prev, newOption]); 
    setNewEntry({...newEntry, category: newOption.value})
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
        setNewEntry({...newEntry, sourceFile: zipFile})
      } catch (error) {
        console.error("Error reading zip file:", error);
      }
    }
  };

  //Implementación de la barra de herramientas del editor de texto
  const quillModules = {
    toolbar: [
      [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image', 'code-block'], 
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
    ],
  };

  const closePreview = () => {
    setShowPreview(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.coverImg || !newEntry.title || !newEntry.content || !newEntry.category) {
      alert("Por favor, completa todos los campos obligatorios antes de enviar.");
      return;
    }
    addBlogEntry(newEntry);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='blog-entry-form'>
        <h1>Crea una entrada de Blog</h1>
        {/* Componente para agregar imagen de portada */}
        <ImgUploadBox onImgSelect={(file) => setNewEntry({...newEntry, coverImg: file})}/>

        <div className='columns'>
          <div className='left-column'>
            {/* Input para el título*/}
            <input 
              className='input title-input'
              type='text' 
              placeholder='Título'
              value={newEntry.title}
              onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
            />

            {/* Componente rich text editor para el contenido */}
            <ReactQuill 
              value={newEntry.content} 
              onChange={(value) => setNewEntry({...newEntry, content: value})}
              modules={quillModules}
            />

            {/* Botones para Publicar y Cancelar */}
            <div className="button-group">
              <button
                type="button" 
                className='cancel-btn' 
                onClick={() => navigate('/')}>
                  Cancelar
              </button>
              <button 
                type="button"
                className='preview-btn'
                onClick={() => setShowPreview(true)}>
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
              {newEntry.sourceFile ? (
                <>
                  {/* Muestra el nombre del archivo seleccionado: */}
                  <div className='file-upload-text uploaded'>
                    Archivo cargado: {newEntry.sourceFile.name}
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
                value={newEntry.githubLink}
                onChange={(e) => setNewEntry({...newEntry, githubLink: e.target.value})}
              />
            </div>

            {/* Menú Dropdown para categorías*/}
            <div className='category-dropdown'>
              <label className="above-text">
                Elige la categoría
              </label>
              <CreatableSelect className='dropdown'
                onChange= {(option) => setNewEntry({...newEntry, category: option.value})}
                onCreateOption={handleAddCategory}
                options={categories}
                value={newEntry.category ? { value: newEntry.category, label: newEntry.category } : null}
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
        showPreview={showPreview}  // Pass the show prop
        entry={newEntry}
        closePreview={closePreview}
      />
    </div>
  );
}
