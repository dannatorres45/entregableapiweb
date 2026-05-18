import React, { useState } from 'react';
import { useSearchCharacters } from '../hooks/useCharacters';
import CharacterGrid from '../components/CharacterGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import './Page.css';
import './SearchPage.css';

function SearchPage() {
  const [query, setQuery] = useState('');
  const { characters, loading, error } = useSearchCharacters(query);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Buscar Personajes</h1>
        <p className="page-subtitle">Busca por nombre en todo el universo</p>
      </div>

      <div className="search-bar-wrapper">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder="Escribe un nombre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        {query && (
          <button className="clear-btn" onClick={() => setQuery('')} aria-label="Limpiar búsqueda">
            ✕
          </button>
        )}
      </div>

      {!query && (
        <div className="search-prompt">
          <p>Empieza a escribir para buscar personajes 👆</p>
        </div>
      )}

      {loading && <LoadingSpinner message="Buscando..." />}

      {error && query && (
        <div className="error-message">
          <span>⚠️</span> No se encontró ningún personaje con ese nombre
        </div>
      )}

      {!loading && !error && query && (
        <>
          <p className="search-results-info">{characters.length} resultado(s) para "{query}"</p>
          <CharacterGrid characters={characters} />
        </>
      )}
    </div>
  );
}

export default SearchPage;
