import React, { useContext, useEffect, useState } from 'react';
import './Footer.css';
import { ThemeContext } from '../ThemeContext';

const Footer = ({ className }) => {
  const { theme } = useContext(ThemeContext);
  const [logoSources, setLogoSources] = useState({});

  useEffect(() => {
    getLogoSource();
  }, [theme]);

  // Get the image sources based on the current theme
  const getLogoSource = () => {
    if (theme === 'dark') {
      // Return the white versions of the images
      setLogoSources({
        twitter: '/images/Symbols/whitetwitterlogo.svg',
        facebook: '/images/Symbols/whitefacebooklogo.svg',
        instagram: '/images/Symbols/whiteinstagramlogo.svg',
        tiktok: '/images/Symbols/whitetiktokaltlogo.svg',
      });
    } else {
      // Return the black versions of the images
      setLogoSources({
        twitter: '/images/Symbols/twitter logo.svg',
        facebook: '/images/Symbols/facebook logo.svg',
        instagram: '/images/Symbols/Vector.svg',
        tiktok: '/images/Symbols/tiktok-alt logo.svg',
      });
    }
  };

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
        <img className="twitter-logo" alt="Twitter logo" src={logoSources.twitter} />
        <img className="facebook-logo" alt="Facebook logo" src={logoSources.facebook} />
        <img className="instagram-logo" alt="Instagram logo" src={logoSources.instagram} />
        <img className="tiktok-alt-logo" alt="Tiktok alt logo" src={logoSources.tiktok} />
      </div>
    </div>
  );
};

export default Footer;
