import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useYoutubeApi from './useYoutubeApi';
import VideosProvider from '../../providers/VideoProvider';
import { youtubeClient } from '../helpers/youtubeHelpers';

const build = () => {
  // eslint-disable-next-line
  const { result, waitForNextUpdate } = renderHook(() => useYoutubeApi(), {
    wrapper: VideosProvider,
  });
  return {
    result,
    waitForNextUpdate,
    mockHookImplementation: () => {
      youtubeClient.mockImplementationOnce(() =>
        Promise.resolve({
          data: 'test',
        })
      );
    },
    mockHookError: () => {
      youtubeClient.mockImplementationOnce(() => Promise.reject(new Error('fail')));
    },
  };
};

describe('useYoutubeApi hook', () => {
  afterEach(cleanup);

  it('initializes states correctly', () => {
    const { result } = build();
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('sets loading correctly when calling api', async () => {
    const { result, waitForNextUpdate, mockHookImplementation } = build();

    mockHookImplementation();

    const { fetchVideos } = result.current;

    expect(result.current.loading).toBe(false);

    act(() => {
      fetchVideos();
    });

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);

    expect(youtubeClient).toBeCalledTimes(1);
  });

  it('fetches data from api', async () => {
    const { result, waitForNextUpdate, mockHookImplementation } = build();

    mockHookImplementation();

    const { fetchVideos } = result.current;

    act(() => {
      fetchVideos();
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual('test');
    expect(youtubeClient).toBeCalledTimes(1);
  });

  it('throws error when api call fails', async () => {
    const { result, waitForNextUpdate, mockHookError } = build();

    mockHookError();

    const { fetchVideos } = result.current;
    act(() => {
      fetchVideos();
    });

    await waitForNextUpdate();
    const { error } = result.current;
    expect(error.name).toBe('Error');
    expect(youtubeClient).toBeCalledTimes(1);
  });
});
