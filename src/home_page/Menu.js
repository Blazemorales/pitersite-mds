import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">P.I.T.E.R</a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </div>
          <div className="nav-item">
            <a href="https://unb-mds.github.io/Projeto-P.I.T.E.R/" className="nav-link">Documentação</a>
          </div>
          <div className="nav-item">
            <a href="./src/rotas_menu/Rota.js" className="nav-link">Pesquisa</a>
          </div>
          <div className="nav-item">
            <a href="https://github.com/unb-mds/Projeto-P.I.T.E.R" className="nav-link">GitHub</a>
          </div>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;