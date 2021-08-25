import React from 'react';
import useGlobalState from '../../utils/hooks/useGlobalState';
import ThemeContext from './ThemeContext';
import { defaultState, themeReducer } from './ThemeContextProvider.reducer';

/* eslint-disable */

const ThemeContentProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={useGlobalState(themeReducer, defaultState)}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContentProvider;
