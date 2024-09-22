import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ProjectFormPage from './components/ProjectFormPage/ProjectFormPage';
import Header from './components/Header/Header'; // Importa el Footer
import Footer from './components/Footer/Footer'; // Importa el Footer
import CategoryPage from './components/CategoryPage/CategoryPage';
import './index.css'
import NosotrosPage from './components/NosotrosPage/NosotrosPage';
import { useParams, useNavigate } from 'react-router-dom';


const App = () => {
  const navigate = useNavigate();
  const [blogEntries, setBlogEntries] = useState([
    {
        id: 1,
        categoria: 'React',
        imagen: 'https://i.postimg.cc/wvmzDbFD/react.png',
        nombre: 'Curso Completo de React 🚀 + Actividades Prácticas Incluídas',
        rating: 2.3,
        autor: 'JAB',
    },
    {
        id: 2,
        categoria: 'Git',
        imagen: 'https://i.postimg.cc/FzHx2wqL/Disen-o-sin-ti-tulo-12.png',
        nombre: 'Curso Completo para Aprender a Trabajar con Git & GitHub',
        rating: 8.6,
        autor: 'MoureDev',
    },
    {
        id: 3,
        categoria: 'JavaScript',
        imagen: 'https://i.postimg.cc/XN1KrHms/Disen-o-sin-ti-tulo-13.png',
        nombre: '100 Proyectos de JavaScript con Código y Vídeos',
        rating: 2.1,
        autor: 'MiduDev',
    },
    {
      id: 4,
      categoria: 'HTML',
      imagen: 'https://i.postimg.cc/gcLy6qpd/Disen-o-sin-ti-tulo-14.png',
      nombre: 'Aprende HTML Ahora! Curso Completo Gratis desde Cero',
      rating: 2.4,
      autor: 'Hola Mundo Dev',
    },
    {
      id: 5,
      categoria: 'Desarrollo Web',
      imagen: 'https://i.postimg.cc/GmdvNWyh/Disen-o-sin-ti-tulo-15.png',
      nombre: 'Cómo Estudiar Desarrollo Web en 2023 : 👩‍💻 Guía Completa  🚀',
      rating: 14,
      autor: 'Míriam González',
    },
    {
      id: 6,
      categoria: 'Python',
      imagen: 'https://i.postimg.cc/k54Cj5MN/Disen-o-sin-ti-tulo-18.png',
      nombre: 'Programación en Python | Lenguaje de Programación ',
      rating: 13,
      autor: 'ATS',
      content: 'mmasdhkfhs',
    },
  ]);

  const addBlogEntry = (newEntry) => {
    const newId = blogEntries.length + 1; //Genera nuevo id
    const imgUrl =  URL.createObjectURL(newEntry.coverImg); //Crea url de la foto de portada
    const newDate = new Date().toLocaleDateString(); //Nueva fecha
    const updatedEntry = { ...newEntry, id: newId, coverImg: imgUrl, date: newDate };
    
    setBlogEntries((prevEntries) => {
        const updatedEntries = [...prevEntries, updatedEntry];
        navigate(`/entry/${newId}`); // Lleva a la página de entrada de blog
        return updatedEntries;
    });
    console.log('newEntry: ', updatedEntry);
  };

  return (
    <>
    <Header /> {/* El Header presente en todas las páginas */}
    <Routes>
      <Route path='/' element={ <HomePage productos={blogEntries}/> }/>
      <Route path='/profile' element={ <ProfilePage/> }/>
      <Route path='/entry/:id' element={ <ProjectPage blogEntries={blogEntries}/> }/>
      <Route path='/entry/new' element={ <ProjectFormPage addBlogEntry={addBlogEntry}/> }/>
      <Route path="/category/:categoria" element={<CategoryPage productos={blogEntries} />} /> {/* Nueva ruta */}
      <Route path="/nosotros" element = {<NosotrosPage/>}/>
    </Routes>
    <Footer /> {/* El footer presente en todas las páginas */}
    </>
  )
}

export default App;
