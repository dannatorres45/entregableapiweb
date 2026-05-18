import React, { useState } from 'react';
import { useCharactersBySpecies } from '../hooks/useCharacters';
import CharacterGrid from '../components/CharacterGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import './Page.css';
import './FilterPage.css';

const SPECIES_LIST = [
  { label: 'Humano', value: 'Human', emoji: '🧑' },
  { label: 'Alien', value: 'Alien', emoji: '👽' },
  { label: 'Robot', value: 'Robot', emoji: '🤖' },
  { label: 'Criatura Mitológica', value: 'Mythological Creature', emoji: '🐉' },
  { label: 'Animal', value: 'Animal', emoji: '🐾' },
  { label: 'Humanoide', value: 'Humanoid', emoji: '🦎' },
  { label: 'Desconocido', value: 'unknown', emoji: '❓' },
];

function FilterPage() {
  const [selectedSpecies, setSelectedSpecies] = useState('Human');
  const { characters, loading, error } = useCharactersBySpecies(selectedSpecies);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Filtrar por Especie</h1>
        <p className="page-subtitle">Selecciona una especie para explorar</p>
      </div>

      <div className="species-selector">
        {SPECIES_LIST.map((sp) => (
          <button
            key={sp.value}
            className={`species-btn ${selectedSpecies === sp.value ? 'active' : ''}`}
            onClick={() => setSelectedSpecies(sp.value)}
          >
            <span className="species-emoji">{sp.emoji}</span>
            <span>{sp.label}</span>
          </button>
        ))}
      </div>

      {selectedSpecies && (
        <div className="filter-results-header">
          <h2 className="results-title">
            {SPECIES_LIST.find((s) => s.value === selectedSpecies)?.emoji}{' '}
            {selectedSpecies}
            {!loading && !error && (
              <span className="results-count"> — {characters.length} personajes</span>
            )}
          </h2>
        </div>
      )}

      {loading && <LoadingSpinner message="Filtrando personajes..." />}

      {error && (
        <div className="error-message">
          <span>⚠️</span> No se encontraron personajes de esta especie
        </div>
      )}

      {!loading && !error && <CharacterGrid characters={characters} />}
    </div>
  );
}

export default FilterPage;
