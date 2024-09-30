import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import UserPostCard from './UserPostCard';
import { useParams } from 'react-router-dom';

export const users = [
    {
        id: 1,
        email: 'mouredev@hotmail.com',
        password: '1234',
        username: 'mouredev',
        name: 'MoureDev',
        bio: 'Soy ingeniero de software desde hace más de 14 años. Actualmente trabajo como freelance full-stack y creo contenido formativo sobre programación y tecnología en redes.',
        profilePicture: 'https://i.postimg.cc/ZKpWrBN2/moure.jpg', 
        memberSince: '2023-01-01',
        redes: 'https://www.youtube.com/@mouredev',
    },
];


export const posts = [
    {
        id: 1,
        title: 'Curso Completo de Git & GitHub',
        content: 'Git y GitHub son dos herramientas fundamentales en el mundo del desarrollo de software. Este es un curso desde cero creado para aprender a trabajar con ellas y así mejorar como programadores.',
        coverImg: 'https://i.postimg.cc/VsHNSGdF/Git0.png',
        enlace: 'https://github.com/mouredev/hello-git/',
        autor: 'MoureDev',
    },
    {
        id: 2,
        title: 'Curso para Aprender Python',
        content: 'Python es el lenguaje de programación más popular de 2022. Este es un curso desde cero para principiantes creado para aprender los fundamentos desde su base hasta lo más avanzado.',
        coverImg: 'https://i.postimg.cc/fRVmtSzV/Py0.png',
        enlace: 'https://github.com/mouredev/Hello-Python/',
        autor: 'MoureDev'
    },
    {
        id: 3,
        title: 'Curso para Aprender SQL y BD Relacionales',
        content: 'Curso completo de 7 horas para aprender los fundamentos del lenguaje SQL y bases de datos relacionales. Más de 80 lecciones y 50 comandos desde cero. Con MySQL y PostgreSQL.',
        coverImg: 'https://i.postimg.cc/QN6FQNn1/SQL0.png',
        enlace: 'https://github.com/mouredev/hello-sql/',
        autor: 'MoureDev'
    },
];

const ProfilePage = ({ searchQuery, currentUser }) => {
    const { username } = useParams();
    const [user, setUser] = useState(null) //estado para el usuario del cual se muestra el perfil

    useEffect(() => {
        // Establece si se muestra el perfil del usuario actual o de otro usuario
        if (username === currentUser.username) {
            setUser(currentUser);
        } else {
            const foundUser = users.find((user) => user.username === username);
            setUser(foundUser);
        }
    }, [username, currentUser]);

    if (!user) {
        return <div> Este perfil no existe! </div>;
    }

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
                <p className="user-joined">Miembro desde: {user.memberSince}</p>
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