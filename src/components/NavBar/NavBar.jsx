import React, { useState, useEffect } from 'react';
import '../NavBar/navbar.css'; // Import your CSS file
import { useTheme } from '../theme';

function Navbar() {
  const [theme, toggleTheme] = useTheme();

  return (
    <nav className={`Navbar ${theme}`}>
      <label className="toggle-switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <h1>Omas Bakery</h1>
      <img src="/images/Symbols/Donut Logo.svg" alt="logo" />
    </nav>
  );
}

export default Navbar;

