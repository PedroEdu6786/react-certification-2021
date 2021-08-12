import { defaultState, videosReducer } from './videosReducer';
import { SET_INPUT, SET_VIDEOS } from './videoTypes';
import videos from '../../mocks/videos.json';

describe('themeReducer', () => {
  it('should perform action: SET_INPUT correctly', () => {
    const action = { type: SET_INPUT, payload: 'react-testing' };
    const expectedState = {
      ...defaultState,
      input: action.payload,
    };

    expect(videosReducer(undefined, action)).toEqual(expectedState);
  });

  it('should perform action: SET_VIDEOS correctly', () => {
    const action = { type: SET_VIDEOS, payload: videos };
    const expectedState = {
      ...defaultState,
      videos: action.payload,
    };

    expect(videosReducer(undefined, action)).toEqual(expectedState);
  });
});
