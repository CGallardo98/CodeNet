import React from 'react';
import './UserPostCard.css';

const UserPostCard = ({ post }) => {
    return (
        <div className="user-post-card">
            <img 
                src={post.image} 
                alt={post.title} 
                className="post-image"
            />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
        </div>
    );
};

export default UserPostCard;