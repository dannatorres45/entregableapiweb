import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

const STATUS_COLORS = {
  Alive: '#00ff88',
  Dead: '#ff4444',
  unknown: '#aaaaaa',
};

function CharacterCard({ character }) {
  const { id, name, image, species, status, gender } = character;
  const statusColor = STATUS_COLORS[status] || '#aaaaaa';

  return (
    <Link to={`/character/${id}`} className="card-link">
      <article className="character-card">
        <div className="card-image-wrapper">
          <img src={image} alt={name} className="card-image" loading="lazy" />
          <div className="card-status-badge" style={{ '--status-color': statusColor }}>
            <span className="status-dot"></span>
            {status}
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-name">{name}</h3>
          <div className="card-meta">
            <span className="meta-item">
              <span className="meta-label">Especie</span>
              <span className="meta-value">{species}</span>
            </span>
            <span className="meta-item">
              <span className="meta-label">Género</span>
              <span className="meta-value">{gender}</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CharacterCard;
