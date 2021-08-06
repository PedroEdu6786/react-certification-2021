import React from 'react';
import useGlobalState from '../../utils/hooks/useGlobalState';
import Context from './VideosContext';
import { videosReducer } from './videosReducer';

// default state for useContext
export const defaultState = { input: 'wizeline', videos: null };

const VideosProvider = ({ children }) => {
  return (
    <Context.Provider value={useGlobalState(videosReducer, defaultState)}>
      {children}
    </Context.Provider>
  );
};

export default VideosProvider;
