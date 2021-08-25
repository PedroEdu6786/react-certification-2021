import { useReducer } from 'react';

const useGlobalState = (reducer, defaultState) => {
  const [globalState, globalDispatch] = useReducer(reducer, defaultState);

  return { globalState, globalDispatch };
};

export default useGlobalState;
