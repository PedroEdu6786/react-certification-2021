import { useContext, useState } from 'react';
import VideosContext from '../../providers/VideoProvider/VideoContext';
import { setVideosAction } from '../../providers/VideoProvider/VideoProvider.actions';
import { buildQueryParams } from '../helpers/helpers';
import { youtubeClient } from '../helpers/youtube.helpers';

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

      globalDispatch(setVideosAction(resp.data));
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
