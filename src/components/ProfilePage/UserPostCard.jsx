import React from 'react';
import './UserPostCard.css';
import { Link } from 'react-router-dom';



const UserPostCard = ({ post, author }) => {

    const vermas = (e, url) => { 
        e.preventDefault();
        window.open(url, '_blank')
    }    

    return (
        <div className="user-post-card">
            <img 
                src={post.coverImg} 
                alt={post.title} 
                className="post-image"
            />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.description}</p>
            <Link to={`/${author.username}/${post.id}`}>
                <button>Leer Más</button>
            </Link>

            {/* <button onClick={(e)=>vermas(e, post.enlace)}>
                Ver Más
            </button> */}
        </div>
    );
};

export default UserPostCard;