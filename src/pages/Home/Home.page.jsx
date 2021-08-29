import React, { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Heading, Loader } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import PreviewList from '../../components/PreviewList';
import VideoContext from '../../providers/VideoProvider/VideoContext';
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
  const { isAuthenticated } = useAuth0();
  const { loading, error, fetchVideos } = useYoutubeApi();
  const { globalState, globalDispatch } = useContext(VideoContext);

  const { input, videos, favoriteVideos } = globalState;

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
      {videos && (
        <PreviewList
          videos={videos.items}
          favoriteVideos={favoriteVideos}
          path="/"
          isAuthenticated={isAuthenticated}
        />
      )}
      {/* Error when data fetching */}
      {error && <Heading>There was an error</Heading>}
    </BodyContainer>
  );
}

export default HomePage;
