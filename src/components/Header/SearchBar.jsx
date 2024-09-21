import React, { useState } from 'react';
import './Header.css';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.reload(); // Recarga la página al enviar
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Buscar" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit" className="search-button">🔍</button>
    </form>
  );
}

export default SearchBar;
