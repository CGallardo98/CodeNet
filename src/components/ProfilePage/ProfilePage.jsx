import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import UserPostCard from './UserPostCard';
import { useParams } from 'react-router-dom';

const ProfilePage = ({ searchQuery, blogEntries, users, currentUser }) => {
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

    const posts = blogEntries.filter(entry => entry.userId === user.id)

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
                
                <p className="user-bio">{user.bio}</p>
                <p className="user-joined">Miembro desde: {user.memberSince}</p>
                <p className="user-redes">{user.redes}</p>
            </div>

            {/* Sección de publicaciones */}
            <h2>Publicaciones</h2>
            <div className="user-posts">
                {displayedEntries.map( (post) => {
                    const author = users.find((user) => user.id === post.userId);
                    return(
                    <UserPostCard key={post.id} post={post} author={author}/>
                    );
                })}
            </div>
            
        </div>
    );
};

export default ProfilePage;