import React from 'react';
import './Header.css';

const Header = ({ title, children }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        {children}
      </div>
    </header>
  );
};

export default Header; 