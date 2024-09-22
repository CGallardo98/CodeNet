import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ producto }) => {
  console.log(producto)
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
        <p className="producto-autor">{decodeURIComponent(producto.autor)}</p>
        <Link to={`/entry/${producto.autor}/${producto.id}`}>
            <button>Leer más</button>
        </Link>
    </div>
  );
};


export default ProductCard;