import React from 'react';
import './Card.css';

const Card = ({ children, title, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card; 