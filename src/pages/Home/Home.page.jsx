import React, { useEffect, useContext } from 'react';
import { Heading } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import PreviewList from '../../components/PreviewList';
import VideosContext from '../../providers/VideoProvider/VideoContext';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';

export const fetchVideosEffect = ({ videos, fetchVideos, input }) => () => {
  if (!videos) fetchVideos(input);
};

function HomePage() {
  const { error, fetchVideos } = useYoutubeApi();
  const { globalState } = useContext(VideosContext);

  const { input, videos } = globalState;

  // eslint-disable-next-line
  useEffect(fetchVideosEffect({ videos, fetchVideos, input }), [videos]);

  return (
    <BodyContainer as="section">
      {/* Main Title */}
      <Heading fontSize="2.441rem">Welcome to the challenge!</Heading>
      {/* Video List */}
      {videos && <PreviewList videos={videos} />}
      {/* Error when data fetching */}
      {error && <Heading>There was an error</Heading>}
    </BodyContainer>
  );
}

export default HomePage;
