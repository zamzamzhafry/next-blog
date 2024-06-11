'use client';

import { createContext, useEffect, useState } from 'react';
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
  return 'light';
};
/* eslint-disable react/prop-types */
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = getFromLocalStorage();
    setTheme(storedTheme);
  }, []);

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
