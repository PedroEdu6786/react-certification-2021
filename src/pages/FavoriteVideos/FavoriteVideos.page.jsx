import React from 'react';
import PreviewList from '../../components/PreviewList';
import videos from '../../mocks/videos.json';
import { Container, Text } from '../../theme/components/Foundation.component';
import { EmptyVideos } from './FavoriteVideos.styles';

function FavoriteVideos() {
  return (
    <Container as="section">
      {/* Video List */}
      {videos ? (
        <PreviewList videos={videos} />
      ) : (
        <EmptyVideos>
          <Text>There is no favorite videos</Text>
        </EmptyVideos>
      )}
    </Container>
  );
}

export default FavoriteVideos;
