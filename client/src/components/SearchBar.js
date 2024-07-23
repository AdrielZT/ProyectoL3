import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const response = await fetch(`http://localhost:5000/api/products/search?query=${e.target.value}`);
      const data = await response.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-bar">
      <input type="text" value={query} onChange={handleSearch} placeholder="Buscar productos..." />
      {results.length > 0 && (
        <div className="search-results">
          {results.map(product => (
            <div key={product._id} className="search-result-item">
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
