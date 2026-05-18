import React, { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import CharacterGrid from '../components/CharacterGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';
import './Page.css';

function HomePage() {
  const [page, setPage] = useState(1);
  const { characters, info, loading, error } = useCharacters(page);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Todos los Personajes</h1>
        {info && (
          <p className="page-subtitle">
            {info.count} personajes en el universo
          </p>
        )}
      </div>

      {loading && <LoadingSpinner />}

      {error && (
        <div className="error-message">
          <span>⚠️</span> {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <CharacterGrid characters={characters} />
          <Pagination
            currentPage={page}
            totalPages={info?.pages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default HomePage;
