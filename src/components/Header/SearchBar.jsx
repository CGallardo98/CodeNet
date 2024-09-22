import React, { useState } from 'react';
import './Header.css';

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.reload(); // Recarga la página al enviar
  };

  return (
    <>
    <div className="search-container">
      <input type="text" placeholder="Buscar" className="search-input" onChange={(e) => setSearchQuery(e.target.value)}/>
      <button className="search-button">
        <img src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png" alt="Search" />
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
