import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterGrid.css';

function CharacterGrid({ characters }) {
  if (!characters || characters.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👽</div>
        <p>No se encontraron personajes</p>
      </div>
    );
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
