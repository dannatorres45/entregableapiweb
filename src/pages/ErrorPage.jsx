import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './Page.css';
import './ErrorPage.css';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="page error-page">
      <div className="error-content">
        <div className="error-glitch" data-text="404">404</div>
        <h1 className="error-title">Portal Equivocado</h1>
        <p className="error-body">
          Parece que acabas de saltar a una dimensión que no existe.
          {error?.statusText && ` (${error.statusText})`}
        </p>
        <Link to="/" className="error-home-btn">
          Volver al Universo Principal
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
