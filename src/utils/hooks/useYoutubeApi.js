import { useContext, useEffect, useState } from 'react';
import Context from '../../store/context';
import { youtubeClient, buildQueryParams } from '../helpers';

const useYoutubeApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(true);
  const { globalDispatch } = useContext(Context);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  const fetchVideos = async (query = '') => {
    if (!isMounted) return;

    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        q: query,
      });
      const resp = await youtubeClient(`/search?${queryParams}`);

      if (!isMounted) return;

      globalDispatch({ type: 'SET_VIDEOS', payload: resp.data });
      setData(resp.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchVideos,
  };
};

export default useYoutubeApi;
