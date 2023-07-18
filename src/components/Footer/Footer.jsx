import React, { useEffect } from 'react';
import './Footer.css';
import { useTheme } from '../theme';

const Footer = ({ className }) => {
  const [theme] = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`UPFI-light-footer ${theme} ${className}`}>
      <div className="overlap-group">
        <div className="contact-us">Contact Us</div>
        <div className="about">About</div>
        <div className="locations">Locations</div>
        <div className="wholesale">Wholesale</div>
        <div className="terms-of-service">Terms of Service</div>
        <div className="overlap">
          <div className="oma-s-bakery">Oma’s Bakery</div>
          <img className="donut-logo" alt="Donut logo" src="/images/Symbols/Donut Logo.svg" />
        </div>
        <img className="twitter-logo" alt="Twitter logo" src="/images/Symbols/twitter logo.svg" />
        <img className="facebook-logo" alt="Facebook logo" src="/images/Symbols/facebook logo.svg" />
        <img className="instagram-logo" alt="Instagram logo" src="/images/Symbols/Vector.svg" />
        <img className="tiktok-alt-logo" alt="Tiktok alt logo" src="/images/Symbols/tiktok-alt Logo.svg" />
      </div>
    </div>
  );
};

export default Footer;
