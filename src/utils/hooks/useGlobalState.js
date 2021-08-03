import { useReducer } from 'react';
import { defaultState, SET_INPUT, SET_VIDEOS } from '../constants';

const reducer = (state, action) => {
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

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, defaultState);

  return { globalState, globalDispatch };
};

export default useGlobalState;
