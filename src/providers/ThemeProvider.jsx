'use client';
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
export const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
