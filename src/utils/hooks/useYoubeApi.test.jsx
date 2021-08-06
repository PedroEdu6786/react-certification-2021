import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useYoutubeApi from './useYoutubeApi';
import VideosProvider from '../../providers/VideosProvider';

describe('useYoutubeApi hook', () => {
  afterEach(cleanup);

  it('initializes states correctly', () => {
    const { result } = renderHook(() => useYoutubeApi());
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('sets loading correctly when calling api', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeApi(), {
      wrapper: VideosProvider,
    });
    const { fetchVideos } = result.current;

    expect(result.current.loading).toBe(false);

    await act(async () => {
      fetchVideos();
      await waitForNextUpdate();
      expect(result.current.loading).toBe(true);
      await waitForNextUpdate();
    });

    expect(result.current.loading).toBe(false);
  });

  it('fetches data from api', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeApi(), {
      wrapper: VideosProvider,
    });
    const { fetchVideos } = result.current;

    act(() => {
      fetchVideos();
    });

    await waitForNextUpdate();
    expect(result.current.data).not.toBe(null);
  });
});
