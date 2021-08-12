import React from 'react';
import useGlobalState from '../../utils/hooks/useGlobalState';
import ThemeContext from './ThemeContext';
import { defaultState, themeReducer } from './themeReducer';

const ThemeContentProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={useGlobalState(themeReducer, defaultState)}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContentProvider;
