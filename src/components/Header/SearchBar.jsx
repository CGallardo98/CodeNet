import React, { useState } from 'react';
import './Header.css';

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState(''); //Estado local para el input de la búsqueda
  const [searchActive, setSearchActive] = useState(false); // Estado para saber si la búsqueda está activa

  // Función para manejar los cambios en el input de búsqueda
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Actualiza el valor de la búsqueda en el input
    if (e.target.value === '') {
      handleClear();  // Limpia la búsqueda cuando el input está vacío
    }
  }  

  // Función para manejar la acción de buscar 
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      setSearchQuery(query); // Ejecuta la búsqueda únicamente cuando "query" no está vacío
      setSearchActive(true); //Para activar el ícono de la caneca
    }
  };

  // Función para manejar el limpiado de la búsqueda
  const handleClear = () => {
    setQuery(''); // Vacía el input de búsqueda
    setSearchQuery('');  // Limpia la búsqueda y muestra todos los resultados
    setSearchActive(false);  // Para resetear el ícono a la lupa
  };

  // Función para detectar la presión de las teclas en el input de búsqueda
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e); // Ejecuta la búsqueda cuando se presiona enter
    }
  };

  return (
    <>
    <div className="search-container">
      <input 
        type="text"
        placeholder="Buscar"
        className="search-input"
        value={query} //Asigna el valor local de la búsqueda
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Detecta el pulso de la tecla enter
      /> 
      <button 
        className="search-button" 
        onClick={searchActive ? handleClear : handleSearch}>
        <img 
          src= {searchActive
            ? "https://cdn-icons-png.flaticon.com/128/1828/1828843.png" // ícono de cancelar para eliminar la búsqueda
            : "https://cdn-icons-png.flaticon.com/128/5636/5636698.png" // ícono de lupa para ejecutar la búsqueda
          }
          alt={searchActive ? "Clear Search" : "Search"}
        />
      </button>
    </div>
    {/* <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Buscar" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit" className="search-button">🔍</button>
    </form> */}
    </>
  );
}

export default SearchBar;
