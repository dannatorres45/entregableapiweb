import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FilterPage from './pages/FilterPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import ErrorPage from './pages/ErrorPage';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/character/:id" element={<CharacterDetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
