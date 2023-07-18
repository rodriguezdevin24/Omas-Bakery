// Navbar.js

import React, { useState, useEffect } from 'react';
import '../NavBar/navbar.css'; // Import your CSS file
import logo from '../../SEI collab Assets/Symbols/Donut Logo.svg';
import darkIcon from '../../SEI collab Assets/Switch Elements/Dark/􀆹.svg';
import lightTransparentIcon from '../../SEI collab Assets/Switch Elements/Dark/􀆭.svg';
import lightIcon from '../../SEI collab Assets/Switch Elements/Light/􀆭.svg';
import darkTransparentIcon from '../../SEI collab Assets/Switch Elements/Light/􀆹.svg';
import redBack from '../../SEI collab Assets/Switch Elements/Light/Group 30.svg';
import greenBack from '../../SEI collab Assets/Switch Elements/Dark/Group 29.svg';
import rectangle from '../../images/upfi-light-upfi-rectangle-108.png';

function Navbar() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`Navbar ${theme}`}>
      <h1>
        <img src={logo} alt="logo" />
        ma's Bakery
      </h1>

      <div className="shape-container">
        <img src={rectangle} alt="rectangle" className="img1" />
        <img src={rectangle} alt="rectangle" className="img2" />
        <img src={rectangle} alt="rectangle" className="img3" />
      </div>

      <label className="toggle-switch">
        <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
        <span className={`slider ${theme === 'light' ? 'toggled' : ''}`}>
          {/* <img src={greenBack} alt="green" className="icon green-back" /> 
          <img src={redBack} alt="red" className="icon red-back" /> */}

          <img src={lightIcon} alt="light" className="icon light-icon" />
          <img src={lightTransparentIcon} alt="lighttrans" className="icon light-transparent-icon" />
          <img src={darkTransparentIcon} alt="darktrans" className="icon dark-transparent-icon" />
          <img src={darkIcon} alt="dark" className="icon dark-icon" />
        </span>
      </label>
    </nav>
  );
}

export default Navbar;

