import { youtubeClient, buildQueryParams } from './helpers';

describe('helpers', () => {
  it('creates axios youtubeClient', async () => {
    const response = {
      data: 'test',
    };

    youtubeClient.mockImplementationOnce(() => Promise.resolve(response));

    const data = await youtubeClient();
    expect(data).toEqual(response);
  });

  it('builds query params', () => {
    const params = buildQueryParams({
      q: 'test',
      video: 'video',
    });

    expect(params).toEqual('q=test&video=video');
  });
});
