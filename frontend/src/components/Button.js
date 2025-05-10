import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, disabled = false }) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 