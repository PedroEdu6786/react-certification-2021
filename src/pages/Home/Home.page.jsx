import React, { useEffect, useContext } from 'react';
import { Heading } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import PreviewList from '../../components/PreviewList';
import VideosContext from '../../providers/VideoProvider/VideoContext';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { setFavoriteVideosAction } from '../../providers/VideoProvider/VideoProvider.actions';

export const handleEffect = ({ videos, fetchVideos, input, globalDispatch }) => () => {
  if (!videos) fetchVideos(input);
  let favoriteList = localStorage.getItem('REACT-CHALLENGE-FAVORITE-VIDEOS') || null;
  favoriteList = JSON.parse(favoriteList);
  if (favoriteList) globalDispatch(setFavoriteVideosAction(favoriteList));
};

function HomePage() {
  const { error, fetchVideos } = useYoutubeApi();
  const { globalState, globalDispatch } = useContext(VideosContext);

  const { input, videos } = globalState;

  // eslint-disable-next-line
  useEffect(handleEffect({ videos, fetchVideos, input, globalDispatch }), [videos]);

  return (
    <BodyContainer as="section">
      {/* Main Title */}
      <Heading fontSize="2.441rem">Welcome to the challenge!</Heading>
      {/* Video List */}
      {videos && <PreviewList videos={videos.items} path="/" />}
      {/* Error when data fetching */}
      {error && <Heading>There was an error</Heading>}
    </BodyContainer>
  );
}

export default HomePage;
