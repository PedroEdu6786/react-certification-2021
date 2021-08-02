import React, { useEffect, useContext } from 'react';
import { Heading } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import PreviewList from '../../components/PreviewList';
import Context from '../../store/context';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';

function HomePage() {
  const { data, error, fetchVideos } = useYoutubeApi();
  const { globalState, globalDispatch } = useContext(Context);

  const { input } = globalState;

  useEffect(() => {
    fetchVideos(input);
    // eslint-disable-next-line
  }, [input]);

  useEffect(() => {
    globalDispatch({ type: 'SET_VIDEOS', payload: data });
    // eslint-disable-next-line
  }, [data]);

  return (
    <BodyContainer as="section">
      {/* Main Title */}
      <Heading fontSize="2.441rem">Welcome to the challenge!</Heading>
      {/* Video List */}
      {data && <PreviewList videos={data} />}
      {/* Error when data fetching */}
      {error && <Heading>There was an error</Heading>}
    </BodyContainer>
  );
}

export default HomePage;
