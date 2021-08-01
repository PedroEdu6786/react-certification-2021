import React from 'react';
import { Heading } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import PreviewList from '../../components/PreviewList';
import videos from '../../mocks/videos.json';

function HomePage() {
  return (
    <BodyContainer as="section">
      {/* Main Title */}
      <Heading fontSize="2.441rem">Welcome to the challenge!</Heading>
      {/* Video List */}
      {/* {data && <PreviewList videos={data} />} */}
      <PreviewList videos={videos} />
    </BodyContainer>
  );
}

export default HomePage;
