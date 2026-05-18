import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCharacterById } from '../hooks/useCharacters';
import LoadingSpinner from '../components/LoadingSpinner';
import './Page.css';
import './CharacterDetailPage.css';

const STATUS_COLORS = {
  Alive: '#00ff88',
  Dead: '#ff4444',
  unknown: '#aaaaaa',
};

function DetailRow({ label, value }) {
  return (
    <div className="detail-row">
      <span className="detail-label">{label}</span>
      <span className="detail-value">{value}</span>
    </div>
  );
}

function CharacterDetailPage() {
  const { id } = useParams();
  const { character, loading, error } = useCharacterById(id);

  if (loading) return <LoadingSpinner message="Cargando detalle..." />;

  if (error) {
    return (
      <div className="page">
        <div className="error-message">
          <span>⚠️</span> {error}
        </div>
        <Link to="/" className="back-link">← Volver al inicio</Link>
      </div>
    );
  }

  if (!character) return null;

  const statusColor = STATUS_COLORS[character.status] || '#aaaaaa';

  return (
    <div className="page">
      <Link to="/" className="back-link">← Volver</Link>

      <div className="detail-card">
        <div className="detail-image-section">
          <img
            src={character.image}
            alt={character.name}
            className="detail-image"
          />
          <div className="detail-status" style={{ '--status-color': statusColor }}>
            <span className="status-dot-large"></span>
            {character.status}
          </div>
        </div>

        <div className="detail-info">
          <h1 className="detail-name">{character.name}</h1>

          <div className="detail-rows">
            <DetailRow label="Especie" value={character.species} />
            <DetailRow label="Género" value={character.gender} />
            <DetailRow label="Tipo" value={character.type || 'N/A'} />
            <DetailRow label="Origen" value={character.origin?.name} />
            <DetailRow label="Última ubicación" value={character.location?.name} />
            <DetailRow label="Episodios" value={character.episode?.length} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetailPage;
