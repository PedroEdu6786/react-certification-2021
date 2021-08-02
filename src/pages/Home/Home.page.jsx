import React, { useEffect, useContext } from 'react';
import { Heading } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import PreviewList from '../../components/PreviewList';
import Context from '../../store/context';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';

function HomePage() {
  const { error, fetchVideos } = useYoutubeApi();
  const { globalState } = useContext(Context);

  const { input, videos } = globalState;

  useEffect(() => {
    if (!videos) fetchVideos(input);
    // eslint-disable-next-line
  }, [videos]);

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
