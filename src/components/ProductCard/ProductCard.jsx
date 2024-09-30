import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ producto, author }) => {
  return (
    <div className="producto-card">
        <img 
            src={producto.coverImg} 
            alt={producto.title} 
            className="producto-imagen"
        />
        <p className="producto-categoria">{producto.category}</p>  
        <h2 className="producto-nombre">{producto.title}</h2>
        <p className="producto-rating">Likes(K): {producto.rating} ★</p> 
        <Link to={`/${author.username}`}>
          <p className="producto-autor">{author.name}</p>
        </Link>
        <Link to={`/entry/${author.username}/${producto.id}`}>
          <button>Leer Más</button>
        </Link>
    </div>
  );
};


export default ProductCard;