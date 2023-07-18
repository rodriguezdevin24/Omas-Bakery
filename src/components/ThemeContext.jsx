import React, { createContext, useState, useContext } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Create the ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeContextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
const useTheme = () => {
  const themeContextValue = useContext(ThemeContext);
  if (!themeContextValue) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themeContextValue;
};

export { ThemeProvider, useTheme, ThemeContext };