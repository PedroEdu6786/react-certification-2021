import { defaultState, videosReducer } from './VideoProvider.reducer';
import { SET_INPUT, SET_VIDEOS } from './VideoProvider.types';
import videos from '../../mocks/videos.json';
import { setInputAction, setVideosAction } from './VideoProvider.actions';

describe('VideoProvider', () => {
  const testInputAction = { type: SET_INPUT, payload: 'react-testing' };
  const testVideosAction = { type: SET_VIDEOS, payload: videos };

  describe('videoActions', () => {
    it('should receive action: { type: SET_INPUT, payload: value }', () => {
      const action = setInputAction('react-testing');
      expect(action).toEqual(testInputAction);
    });

    it('should receive action: { type: SET_VIDEOS, payload: value }', () => {
      const action = setVideosAction(videos);
      expect(action).toEqual(testVideosAction);
    });
  });

  describe('videoReducer', () => {
    it('should perform action: SET_INPUT correctly', () => {
      const expectedState = {
        ...defaultState,
        input: testInputAction.payload,
      };

      expect(videosReducer(undefined, testInputAction)).toEqual(expectedState);
    });

    it('should perform action: SET_VIDEOS correctly', () => {
      const expectedState = {
        ...defaultState,
        videos: testVideosAction.payload,
      };

      expect(videosReducer(undefined, testVideosAction)).toEqual(expectedState);
    });
  });
});
