import { cleanup } from '@testing-library/react';
import { REACT_CHALLENGE_FAVORITE_VIDEOS } from '../constants';
import { buildQueryParams } from './helpers';
import { addToLocalStorage, getFromLocalStorage } from './localStorage.helpers';
import { addFavoriteVideo, removeFavoriteVideo, findVideoById } from './video.helpers';
import { youtubeClient } from './youtube.helpers';

describe('helpers', () => {
  afterEach(cleanup);

  describe('youtube helpers', () => {
    it('creates axios youtubeClient', async () => {
      const response = {
        data: 'test',
      };

      youtubeClient.mockImplementationOnce(() => Promise.resolve(response));

      const data = await youtubeClient();
      expect(data).toEqual(response);
    });
  });

  describe('helpers', () => {
    it('builds query params', () => {
      const params = buildQueryParams({
        q: 'test',
        video: 'video',
      });

      expect(params).toEqual('q=test&video=video');
    });
  });

  const testVideo = { id: { videoId: 'test' } };

  describe('localStorage helpers', () => {
    it('adds video to localStorage', () => {
      const videos = addToLocalStorage(testVideo);
      const favoriteVideos = getFromLocalStorage(REACT_CHALLENGE_FAVORITE_VIDEOS);

      expect(favoriteVideos).toEqual(videos);
    });
  });

  describe('video helpers', () => {
    it('adds favorite video to globalState', () => {
      const globalDispatch = jest.fn();

      addFavoriteVideo(testVideo, globalDispatch);
      expect(globalDispatch).toBeCalledTimes(1);
    });

    it('removes favorite video from globalState', () => {
      const globalDispatch = jest.fn();

      removeFavoriteVideo(testVideo.id.videoId, globalDispatch);
      expect(globalDispatch).toBeCalledTimes(1);
    });

    it('finds a video by id', () => {
      const testVideos = [
        { id: { videoId: '1' } },
        { id: { videoId: '2' } },
        { id: { videoId: '3' } },
      ];

      const video = findVideoById(testVideos, '1');
      const expectedResult = testVideos[0];
      expect(video).toEqual(expectedResult);
    });
  });
});
