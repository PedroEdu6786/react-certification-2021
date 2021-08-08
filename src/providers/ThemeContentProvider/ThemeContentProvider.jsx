import React from 'react';
import themes from '../../theme/themes';
import useGlobalState from '../../utils/hooks/useGlobalState';
import ThemeContext from './ThemeContext';
import { themeReducer } from './themeReducer';

// default state for useContext
export const defaultState = { theme: themes.light };

const ThemeContentProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={useGlobalState(themeReducer, defaultState)}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContentProvider;
