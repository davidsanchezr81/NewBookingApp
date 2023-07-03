import React from 'react';
import './css/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img alt="Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#" className="nav-link">Link 1</a>
        <a href="#" className="nav-link">Link 2</a>
        <a href="#" className="nav-link">Link 3</a>
        <a href="#" className="nav-link">Link 4</a>
      </nav>
    </header>
  );
};

export default Header;
