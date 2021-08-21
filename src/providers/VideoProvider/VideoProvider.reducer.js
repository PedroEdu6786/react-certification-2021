import { SET_FAVORITE_VIDEOS, SET_INPUT, SET_VIDEOS } from './VideoProvider.types';

// default state for useContext
export const defaultState = { input: 'wizeline', videos: null, favoriteVideos: null };

export const videosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };

    case SET_FAVORITE_VIDEOS:
      return {
        ...state,
        favoriteVideos: action.payload,
      };
    default: {
      return state;
    }
  }
};
