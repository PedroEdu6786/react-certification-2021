import { SET_FAVORITE_VIDEOS, SET_INPUT, SET_VIDEOS } from './VideoProvider.types';

// returns list of favorite videos from localStorage
export const addFavoriteVideo = (videoData) => {
  let favoriteList = localStorage.getItem('REACT-CHALLENGE-FAVORITE-VIDEOS') || [];
  favoriteList = favoriteList.length > 0 ? JSON.parse(favoriteList) : [];
  favoriteList.push(videoData);
  localStorage.setItem('REACT-CHALLENGE-FAVORITE-VIDEOS', JSON.stringify(favoriteList));

  return favoriteList;
};

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
