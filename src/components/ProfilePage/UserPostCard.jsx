import React from 'react';
import './UserPostCard.css';



const UserPostCard = ({ post }) => {

    const vermas = (e, url) => { 
        e.preventDefault();
        window.open(url, '_blank')
    }    

    return (
        <div className="user-post-card">
            <img 
                src={post.image} 
                alt={post.title} 
                className="post-image"
            />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>

            <button onClick={(e)=>vermas(e, post.enlace)}>
                Ver Más
            </button>
        </div>
    );
};

export default UserPostCard;