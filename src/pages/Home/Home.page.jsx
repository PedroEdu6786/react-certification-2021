import React from 'react';
import { Heading } from '../../theme/components/Foundation.component';
import videos from '../../mocks/videos.json';
import VideoPreview from '../../components/VideoPreview';
import { BodyContainer, PreviewsContainer } from './Home.styles';
import Layout from '../../components/Layout';

function HomePage() {
  return (
    <Layout>
      <BodyContainer as="section">
        {/* Main Title */}
        <Heading fontSize="2.441rem">Welcome to the challenge!</Heading>

        {/* Video List */}
        <PreviewsContainer>
          {videos.items.map((video) => (
            <VideoPreview
              key={`${video.id.videoId}${video.snippet.channelId}`}
              title={video.snippet.title}
              description={video.snippet.description}
              thumbnail={video.snippet.thumbnails}
            />
          ))}
        </PreviewsContainer>
      </BodyContainer>
    </Layout>
  );
}

export default HomePage;
