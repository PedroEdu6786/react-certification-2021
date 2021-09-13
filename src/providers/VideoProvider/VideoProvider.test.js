import { defaultState, videosReducer } from './VideoProvider.reducer';
import videos from '../../mocks/videos.json';
import {
  setFavoriteVideosAction,
  setInputAction,
  setVideosAction,
} from './VideoProvider.actions';

describe('VideoProvider', () => {
  const testInputAction = setInputAction('react-testing');
  const testVideosAction = setVideosAction(videos);
  const testFavoriteAction = setFavoriteVideosAction(videos);

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

    it('should perform action: SET_FAVORITE_VIDEOS correctly', () => {
      const expectedState = {
        ...defaultState,
        favoriteVideos: testFavoriteAction.payload,
      };

      expect(videosReducer(undefined, testFavoriteAction)).toEqual(expectedState);
    });

    it('should perform action: default correctly', () => {
      expect(videosReducer(undefined, { type: 'DEFAULT' })).toEqual(defaultState);
    });
  });
});
