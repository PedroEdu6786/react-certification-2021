import { SET_FAVORITE_VIDEOS, SET_INPUT, SET_VIDEOS } from './VideoProvider.types';

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

export const setFavoriteVideosAction = (value) => {
  return {
    type: SET_FAVORITE_VIDEOS,
    payload: value,
  };
};
