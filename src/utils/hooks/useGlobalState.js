import { useReducer } from 'react';
import { SET_INPUT, SET_VIDEOS } from '../constants';

const defaultState = { input: 'wizeline', videos: null };

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
