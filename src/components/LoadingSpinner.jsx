import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner({ message = 'Cargando personajes...' }) {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-ring">
        <div></div><div></div><div></div><div></div>
      </div>
      <p className="spinner-text">{message}</p>
    </div>
  );
}

export default LoadingSpinner;
