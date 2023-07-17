import React, { useState, useEffect } from 'react';
import '../NavBar/navbar.css'; // Import your CSS file
import logo from '../../SEI collab Assets/Symbols/Donut Logo.svg';

function Navbar() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`Navbar ${theme}`}>
      <label className="toggle-switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <h1>Omas Bakery</h1>
      <img src={logo} alt="logo" />
    </nav>
  );
}

export default Navbar;

