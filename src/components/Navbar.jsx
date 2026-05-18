import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <span className="brand-rick">Rick</span>
        <span className="brand-and">&</span>
        <span className="brand-morty">Morty</span>
        <span className="brand-sub">Explorer</span>
      </Link>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Todos los Personajes
          </NavLink>
        </li>
        <li>
          <NavLink to="/filter" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Filtrar por Especie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
