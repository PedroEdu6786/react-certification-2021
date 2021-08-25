// import VideosProvider from '../../providers/VideosProvider';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useGlobalState from './useGlobalState';

const defaultState = { input: 'wizeline' };

const SET_INPUT = 'SET_INPUT';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    default: {
      return state;
    }
  }
};

const build = () => {
  // eslint-disable-next-line
  const { result, waitForNextUpdate } = renderHook(() =>
    useGlobalState(reducer, defaultState)
  );
  return {
    result,
    waitForNextUpdate,
  };
};

describe('useGlobalState hook', () => {
  it('initializes state', () => {
    const { result } = build();

    const { globalState } = result.current;

    expect(globalState).toBe(defaultState);
  });

  it('should update state', async () => {
    const { result } = build();

    const { globalDispatch } = result.current;

    act(() => {
      globalDispatch({ type: 'SET_INPUT', payload: 'test' });
    });

    const { globalState } = result.current;

    expect(globalState.input).toBe('test');
  });

  it('should return default case', async () => {
    const { result } = build();

    const { globalDispatch } = result.current;

    act(() => {
      globalDispatch('TEST');
    });

    const { globalState } = result.current;

    expect(globalState).toBe(defaultState);
  });
});
