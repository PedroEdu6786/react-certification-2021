import { SET_INPUT, SET_VIDEOS } from './videoTypes';

// default state for useContext
export const defaultState = { input: 'wizeline', videos: null };

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
    default: {
      return state;
    }
  }
};
