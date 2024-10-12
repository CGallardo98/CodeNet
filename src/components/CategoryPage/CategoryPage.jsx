import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPage.css";

const CategoryPage = ({ productos, users }) => {
  const { categoria } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    if (categoria) {
      // Filtrar los productos según la categoría
      const filtrados = productos.filter(
        (producto) => producto.category.toLowerCase() === categoria.toLowerCase()
      );
      setProductosFiltrados(filtrados);
    }
  }, [categoria, productos]);

  return (
    <div className="category-page">
      <h2>Productos en la categoría: {categoria}</h2>
      <div className="producto-lista">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => {
            const author = users.find((user) => user.id === producto.userId); // Encuentra el autor
            return(
              <ProductCard key={producto.id} producto={producto} author={author}/>
            );
        })
        ) : (
          <p>No hay publicaciones disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
