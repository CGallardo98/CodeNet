import React from 'react';
import './UserPostCard.css';
import { Link } from 'react-router-dom';



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
            <Link to={`/entry/${post.autor}/${post.id}`}>
                <button>Leer más</button>
            </Link>

            {/* <button onClick={(e)=>vermas(e, post.enlace)}>
                Ver Más
            </button> */}
        </div>
    );
};

export default UserPostCard;