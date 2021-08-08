import React from 'react';
import useGlobalState from '../../utils/hooks/useGlobalState';
import VideosContext from './VideosContext';
import { videosReducer } from './videosReducer';

// default state for useContext
export const defaultState = { input: 'wizeline', videos: null };

const VideosProvider = ({ children }) => {
  return (
    <VideosContext.Provider value={useGlobalState(videosReducer, defaultState)}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosProvider;
