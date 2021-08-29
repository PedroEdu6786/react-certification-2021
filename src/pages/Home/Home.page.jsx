import React, { useEffect, useContext } from 'react';
import { Heading, Loader } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import PreviewList from '../../components/PreviewList';
import VideosContext from '../../providers/VideoProvider/VideoContext';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { setFavoriteVideosAction } from '../../providers/VideoProvider/VideoProvider.actions';
import { getFromLocalStorage } from '../../utils/helpers/localStorage.helpers';
import { REACT_CHALLENGE_FAVORITE_VIDEOS } from '../../utils/constants';

/*
  Fetches videos if there's no favorite videos fetched yet
  Checks if there are favorite videos on local storage
  If there are favoriteVideos on localStorage then saves them to globalState
*/
export const handleEffect = ({ videos, fetchVideos, input, globalDispatch }) => () => {
  if (!videos) fetchVideos(input);

  const favoriteList = getFromLocalStorage(REACT_CHALLENGE_FAVORITE_VIDEOS);
  if (favoriteList) globalDispatch(setFavoriteVideosAction(favoriteList));
};

function HomePage() {
  const { loading, error, fetchVideos } = useYoutubeApi();
  const { globalState, globalDispatch } = useContext(VideosContext);

  const { input, videos } = globalState;

  // eslint-disable-next-line
  useEffect(handleEffect({ videos, fetchVideos, input, globalDispatch }), [
    videos,
    input,
    globalDispatch,
  ]);

  return (
    <BodyContainer as="section">
      {/* Main Title */}
      <Heading fontSize="2.441rem">Welcome to the challenge!</Heading>
      {/* Loading animation when data fetching */}
      {loading && <Loader />}
      {/* Video List */}
      {videos && <PreviewList videos={videos.items} path="/" />}
      {/* Error when data fetching */}
      {error && <Heading>There was an error</Heading>}
    </BodyContainer>
  );
}

export default HomePage;
