import React from 'react';
import useGlobalState from '../../utils/hooks/useGlobalState';
import VideoContext from './VideoContext';
import { defaultState, videosReducer } from './VideoProvider.reducer';

/* eslint-disable */

const VideosProvider = ({ children }) => {
  return (
    <VideoContext.Provider value={useGlobalState(videosReducer, defaultState)}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideosProvider;
