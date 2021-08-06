import { useContext, useState } from 'react';
import VideosContext from '../../providers/VideosProvider/VideosContext';
import { youtubeClient, buildQueryParams } from '../helpers';

const useYoutubeApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { globalDispatch } = useContext(VideosContext);

  const fetchVideos = async (query = '') => {
    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        q: query,
      });
      const resp = await youtubeClient(`/search?${queryParams}`);

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
