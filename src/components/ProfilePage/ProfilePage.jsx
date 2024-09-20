import React from 'react';
import './ProfilePage.css';
import UserPostCard from './UserPostCard';

const ProfilePage = () => {
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
            title: 'Confesiones de un Programador',
            content: 'De tener que confesarme, qué mejor que con KeepCoding, referentes en enseñanza online de programación informática. Esta es mi entrevista más larga hasta la fecha, todo un orgullo poder hablar de mi carrera de esta manera. ¡Espero que os guste!',
            image: 'https://i.postimg.cc/tT3c3zX7/1.png',
            enlace: 'https://mouredev.com/blog/2019/01/22/confesiones-de-un-programador/',
        },
        {
            id: 2,
            title: 'Apps Made in Monforte',
            content: 'El diario El Progreso ha realizado un reportaje sobre mi trayectoria y regreso a Monforte de Lemos, mi ciudad natal en la que vivo actualmente y desempeño mi trabajo de desarrollador de software freelance. Puedes leer el artículo completo pinchando en Brais Moure: Apps made in Monforte.',
            image: 'https://i.postimg.cc/T2Q7T1h8/2.png',
            enlace: 'https://mouredev.com/blog/2019/01/22/apps-made-in-monforte/',
        },
        {
            id: 3,
            title: 'Mis 5 Herramientas para Mejorar tu Productividad en #crecemosDH',
            content: 'Hoy nace #crecemosDH, una iniciativa de Dinahosting. Trucos y consejos para utilizar en el día a día de tu empresa 💪🏼. En este primer vídeo os cuento cuáles son las 5 herramientas de productividad que uso a diario. ¡Espero que os resulte útil!',
            image: 'https://i.postimg.cc/Bvc5N7KW/3.png',
            enlace: 'https://mouredev.com/blog/2019/01/22/apps-made-in-monforte/',
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
     
      },
    
    ];

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
                {posts.map(post => (
                    <UserPostCard key={post.id} post={post} />
                ))}
            </div>
            
        </div>
    );
};

export default ProfilePage;