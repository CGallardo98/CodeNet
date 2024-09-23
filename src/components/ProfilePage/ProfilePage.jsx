import React from 'react';
import './ProfilePage.css';
import UserPostCard from './UserPostCard';

const ProfilePage = ({ searchQuery }) => {
    const user = {
        profilePicture: 'https://i.postimg.cc/ZKpWrBN2/moure.jpg', 
        name: 'MoureDev',
        email: 'Hola 👋🏼 Mi nombre es Brais Moure',
        bio: 'Soy ingeniero de software desde hace más de 14 años. Actualmente trabajo como freelance full-stack y creo contenido formativo sobre programación y tecnología en redes. ',
        joinedDate: 'Enero 2023',
        redes: 'https://www.youtube.com/@mouredev',
    };

    const posts = [
        {
            id: 1,
            title: 'Curso Completo de Git & GitHub',
            content: 'Git y GitHub son dos herramientas fundamentales en el mundo del desarrollo de software. Este es un curso desde cero creado para aprender a trabajar con ellas y así mejorar como programadores.',
            image: 'https://i.postimg.cc/VsHNSGdF/Git0.png',
            enlace: 'https://github.com/mouredev/hello-git/',
            autor: 'MoureDev',
        },
        {
            id: 2,
            title: 'Curso para Aprender Python',
            content: 'Python es el lenguaje de programación más popular de 2022. Este es un curso desde cero para principiantes creado para aprender los fundamentos desde su base hasta lo más avanzado.',
            image: 'https://i.postimg.cc/fRVmtSzV/Py0.png',
            enlace: 'https://github.com/mouredev/Hello-Python/',
        },
        {
            id: 3,
            title: 'Curso para Aprender SQL y BD Relacionales',
            content: 'Curso completo de 7 horas para aprender los fundamentos del lenguaje SQL y bases de datos relacionales. Más de 80 lecciones y 50 comandos desde cero. Con MySQL y PostgreSQL.',
            image: 'https://i.postimg.cc/QN6FQNn1/SQL0.png',
            enlace: 'https://github.com/mouredev/hello-sql/',
        },
    ];

    const perfil = [
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
          imagen: 'https://i.postimg.cc/qvvkjG47/Git8.png',
          nombre: 'Curso para Aprender a Trabajar con Git & GitHub',
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
        nombre: 'Programación en Python | Lenguaje ',
        rating: 13,
        autor: 'ATS',
     
      },
    
    ];

    //Implementación de la búsqueda
    const displayedEntries = posts.filter(entry => { ///// --->> filta la búsqueda sobre el filtro de tab existente
        return (entry.title.toLowerCase().includes(searchQuery.toLowerCase())//Retorna títulos que correspondan con la búsqueda
        );
    })

    return (
        <div className="profile-page">
            {/* Sección de perfil descriptivo */}
            <div className="profile-card">
                <img 
                    src={user.profilePicture} 
                    alt={"${user.name}'s perfil"} 
                    className="profile-picture"
                />
                <h1 className="user-name">
                    <a href={"https://mouredev.com/blog/"} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    {user.name}
                </a></h1>
                
                <p className="user-email">{user.email}</p>
                <p className="user-bio">{user.bio}</p>
                <p className="user-joined">Miembro desde: {user.joinedDate}</p>
                <p className="user-redes">{user.redes}</p>
            </div>

            {/* Sección de publicaciones */}
            <h2>Publicaciones</h2>
            <div className="user-posts">
                {displayedEntries.map(post => (
                    <UserPostCard key={post.id} post={post} />
                ))}
            </div>
            
        </div>
    );
};

export default ProfilePage;