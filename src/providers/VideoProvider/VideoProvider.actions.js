import { SET_INPUT, SET_VIDEOS } from './VideoProvider.types';

export const setInputAction = (value) => {
  return {
    type: SET_INPUT,
    payload: value,
  };
};

export const setVideosAction = (value) => {
  return {
    type: SET_VIDEOS,
    payload: value,
  };
};
