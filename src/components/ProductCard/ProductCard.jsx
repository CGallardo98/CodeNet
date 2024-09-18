import React from 'react';

const ProductCard = ({ producto }) => {
  return (
    <div className="producto-card">
        <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="producto-imagen"
        />
        <p className="producto-categoria">{producto.categoria}</p>  
        <h2 className="producto-nombre">{producto.nombre}</h2>
        <p className="producto-rating">Likes(K): {producto.rating} ★</p>   
        <p className="producto-autor">{producto.autor}</p>    

    </div>
  );
};


export default ProductCard;