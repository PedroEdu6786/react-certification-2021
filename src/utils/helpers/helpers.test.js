import { buildQueryParams } from './helpers';
import { youtubeClient } from './youtubeHelpers';

describe('helpers', () => {
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
});
