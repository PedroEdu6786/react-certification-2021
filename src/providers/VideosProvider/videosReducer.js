import { SET_INPUT, SET_VIDEOS } from './videoTypes';

export const videosReducer = (state, action) => {
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
