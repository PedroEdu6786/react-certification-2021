import React from 'react';
import useGlobalState from '../../utils/hooks/useGlobalState';
import VideosContext from './VideosContext';
import { defaultState, videosReducer } from './videosReducer';

const VideosProvider = ({ children }) => {
  return (
    <VideosContext.Provider value={useGlobalState(videosReducer, defaultState)}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosProvider;
