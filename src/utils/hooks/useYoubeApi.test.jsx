import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useYoutubeApi from './useYoutubeApi';
import GlobalStateProvider from '../../store/GlobalStateProvider';

describe('useYoutubeApi hook', () => {
  afterEach(cleanup);

  it('initializes states correctly', () => {
    const { result } = renderHook(() => useYoutubeApi());
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('loads correctly when calling api', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeApi(), {
      wrapper: GlobalStateProvider,
    });
    const { fetchVideos } = result.current;

    expect(result.current.loading).toBe(false);

    await act(async () => {
      fetchVideos();
      await waitForNextUpdate();
      expect(result.current.loading).toBe(true);
    });

    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });

  it('fetches data from api', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeApi(), {
      wrapper: GlobalStateProvider,
    });
    const { fetchVideos } = result.current;

    act(() => {
      fetchVideos();
    });

    await waitForNextUpdate();
    expect(result.current.data).not.toBe(null);
  });
});
