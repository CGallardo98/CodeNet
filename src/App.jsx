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
import { useNavigate } from 'react-router-dom';
import { users, posts } from './components/ProfilePage/ProfilePage';


const App = () => {
  const navigate = useNavigate();
  const currentUser = users[0]; //Simula que el usuario actual es el primero en la lista
  const [blogEntries, setBlogEntries] = useState([
    {
      id: 1,
      category: 'Git',
      coverImg: 'https://i.postimg.cc/Ls6q358J/Sin-ti-tulo-532-x-437-px.png',
      title: 'Curso para Aprender a Trabajar con Git & GitHub',
      rating: 8.6,
      autor: 'MoureDev',
      userImg: '/mouredev.png',
      date: '',
      content: `
        <blockquote>
          <p>Si consideras útil el curso, apóyalo haciendo "★ Star" en el <a href="https://github.com/mouredev/hello-git?tab=readme-ov-file#nuevo-libro-de-git--github-desde-cero-segunda-edición" target="_blank" rel="noopener noreferrer">repositorio</a>. ¡Gracias!</p>
        </blockquote>
        <h2> Lo que aprenderás </h2>
        <hr/>
        <ul>
          <li style="">Git desde su historia y fundamentos</li>
          <li>Conceptos principales y flujo de trabajo</li>
          <li>Manejo de terminal</li>
          <li>Instalación y configuración</li>
          <li>Más de 25 comandos de Git</li>
          <li>GitHub desde cero</li>
          <li>Configuración y autenticación</li>
          <li>Integración de Git con GitHub</li>
          <li>Flujo colaborativo</li>
          <li>Herramientas destacadas</li>
          <li>Ejemplos prácticos</li>
        </ul>
        <p>Y mucho más...</p>
        <h2>Clases en vídeo</h2>
        <hr/>
        <p>ℹ️ Tienes un canal llamado "git-github" en el servidor de <a href="https://mouredev.com/discord" target="_blank" rel="noopener noreferrer">Discord</a> de la comunidad para preguntar, compartir y ayudar.</p>
        <img class="content-img" src="https://camo.githubusercontent.com/0477faa76d9cbf6850abb5d9c58d37cb553b54b108a6f16f08325acec2d630f7/687474703a2f2f69332e7974696d672e636f6d2f76692f3347796d4578426b4b6a452f6d617872657364656661756c742e6a7067">
        <ul dir="auto">
          <li><a href="https://youtu.be/3GymExBkKjE" rel="nofollow">Introducción</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=196" rel="nofollow">Lección 1 - Introducción a Git</a> <strong>Comienza la parte de Git</strong></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=622" rel="nofollow">Lección 2 - Historia de Git</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=876" rel="nofollow">Lección 3 - Instalación de Git</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=1441" rel="nofollow">Lección 4 - Comandos básicos de la terminal</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=1814" rel="nofollow">Lección 5 - Configuración de Git</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=2208" rel="nofollow">Lección 6 - "git init"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=2544" rel="nofollow">Lección 7 - Ramas en Git</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=2721" rel="nofollow">Lección 8 - "git add" y "git commit"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=3207" rel="nofollow">Lección 9 - "git log" y "git status"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=3468" rel="nofollow">Lección 10 - "git checkout" y "git reset"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=3782" rel="nofollow">Lección 11 - "git alias"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=3905" rel="nofollow">Lección 12 - Fichero .gitignore</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=4145" rel="nofollow">Lección 13 - "git diff"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=4314" rel="nofollow">Lección 14 - Desplazamiento en una rama</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=4772" rel="nofollow">Lección 15 - "git reset --hard" y "git reflog"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=5258" rel="nofollow">Lección 16 - "git tag"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=5857" rel="nofollow">Lección 17 - "git branch" y "git switch"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=6547" rel="nofollow">Lección 18 - "git merge"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=6870" rel="nofollow">Lección 19 - Resolución de conflictos en Git</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=7423" rel="nofollow">Lección 20 - "git stash"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=7811" rel="nofollow">Lección 21 - Reintegración de ramas en Git</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=8187" rel="nofollow">Lección 22 - Eliminación de ramas en Git</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=8547" rel="nofollow">Lección 23 - Introducción a GitHub</a> <strong>Comienza la parte de GitHub</strong></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=8874" rel="nofollow">Lección 24 - Primeros pasos en GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=9039" rel="nofollow">Lección 25 - Repositorio personal</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=9761" rel="nofollow">Lección 26 - Local y Remoto</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=10053" rel="nofollow">Lección 27 - Autenticación SSH en GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=10845" rel="nofollow">Lección 28 - Repositorio proyecto</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=10950" rel="nofollow">Lección 29 - "git remote"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=11240" rel="nofollow">Lección 30 - Subida de un proyecto a GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=11492" rel="nofollow">Lección 31 - "git fetch" y "git pull"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=11802" rel="nofollow">Lección 32 - "git clone"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=11996" rel="nofollow">Lección 33 - "git push"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=12092" rel="nofollow">Lección 34 - "Fork" en GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=12422" rel="nofollow">Lección 35 - Flujo colaborativo en GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=12646" rel="nofollow">Lección 36 - "Pull Request (PR)" en GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=12930" rel="nofollow">Lección 37 - Ejercicio práctico</a> <strong>Práctica</strong></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=13062" rel="nofollow">Lección 38 - Resolución de conflictos en Pull Requests</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=14011" rel="nofollow">Lección 39 - Sincronización de un Fork en GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=14214" rel="nofollow">Lección 40 - Markdown en GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=14437" rel="nofollow">Lección 41 - Herramientas gráficas (GUI) para Git y GitHub</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=15517" rel="nofollow">Lección 42 - Git y GitHub "flow"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=16516" rel="nofollow">Lección 43 - Ejemplo Gitflow</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=17569" rel="nofollow">Lección 44 - "git cherry-pick" y "git rebase"</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=18006" rel="nofollow">Lección 45 - GitHub Pages y Actions</a></li>
          <li><a href="https://youtu.be/3GymExBkKjE?t=18263" rel="nofollow">Próximos pasos</a></li>
        </ul>
        <blockquote>
          <p dir="auto">Si estás participando en el curso y ya has visto la lección 36, practica un flujo completo de trabajo en Git y GitHub añadiendo tu nombre de usuario en el documento <a href="/mouredev/hello-git/blob/main/hello.md">hello.md</a>.</p>
        </blockquote>
        `,
    },
    {
      id: 2,
      category: 'React',
      coverImg: 'https://i.postimg.cc/wvmzDbFD/react.png',
      title: 'Curso de React 🚀 + Actividades Prácticas',
      rating: 2.3,
      autor: 'JAB',
      userImg: '',
      date: '',
      content: '',
    },
    {
      id: 3,
      category: 'JavaScript',
      coverImg: 'https://i.postimg.cc/XN1KrHms/Disen-o-sin-ti-tulo-13.png',
      title: '100 Proyectos de JavaScript con Videos',
      rating: 2.1,
      autor: 'MiduDev',
      date: '',
      content: '',
    },
    {
      id: 4,
      category: 'HTML',
      coverImg: 'https://i.postimg.cc/gcLy6qpd/Disen-o-sin-ti-tulo-14.png',
      title: 'Aprende HTML! Curso Gratis desde Cero',
      rating: 2.4,
      autor: 'Hola Mundo Dev',
      date: '',
      content: '',
    },
    {
      id: 5,
      category: 'Desarrollo Web',
      coverImg: 'https://i.postimg.cc/GmdvNWyh/Disen-o-sin-ti-tulo-15.png',
      title: 'Cómo Estudiar Desarrollo Web en 2023 🚀',
      rating: 14,
      autor: 'Míriam González',
      date: '',
      content: '',
    },
    {
      id: 6,
      category: 'Python',
      coverImg: 'https://i.postimg.cc/k54Cj5MN/Disen-o-sin-ti-tulo-18.png',
      title: 'Programación en Lenguaje Python',
      rating: 13,
      autor: 'ATS',
      date: '',
      content: '',
    },
  ]);

  const addBlogEntry = (newEntry) => {
    const newId = blogEntries.length + 1; //Genera nuevo id
    const imgUrl =  URL.createObjectURL(newEntry.coverImg); //Crea url de la foto de portada
    const newDate = new Date().toLocaleDateString(); //Nueva fecha
    const encodedAutor = encodeURIComponent(newEntry.autor)
    const updatedEntry = { ...newEntry, id: newId, coverImg: imgUrl, date: newDate };
    
    setBlogEntries((prevEntries) => {
        const updatedEntries = [...prevEntries, updatedEntry];
        navigate(`/entry/${encodedAutor}/${newId}`); // Lleva a la página de entrada de blog
        return updatedEntries;
    });
  };

  const [searchQuery, setSearchQuery] = useState('');


  return (
    <>
    <Header setSearchQuery={setSearchQuery} user={currentUser}/> {/* El Header presente en todas las páginas */}
    <Routes>
      <Route path='/' element={ <HomePage productos={blogEntries} searchQuery={searchQuery}/> }/>
      <Route path='/:username' element={<ProfilePage searchQuery={searchQuery} currentUser={currentUser}/> }/>
      <Route path='/entry/:autor/:id' element={ <ProjectPage blogEntries={[...blogEntries, ...posts]}/> }/>
      <Route path='/entry/new' element={ <ProjectFormPage addBlogEntry={addBlogEntry}/> }/>
      <Route path="/category/:categoria" element={<CategoryPage productos={blogEntries} />} /> {/* Nueva ruta */}
      <Route path="/nosotros" element = {<NosotrosPage/>}/>
    </Routes>
    <Footer /> {/* El footer presente en todas las páginas */}
    </>
  )
}

export default App;
