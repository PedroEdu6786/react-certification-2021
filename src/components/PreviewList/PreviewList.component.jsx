import React from 'react';
import VideoPreview from '../VideoPreview';
import videos from '../../mocks/videos.json';
import { PreviewsContainer } from './PreviewList.styles';

function PreviewList() {
  return (
    <PreviewsContainer data-testid="preview-list" id="preview-list">
      {videos.items.map((video) => (
        <VideoPreview
          key={`${video.id.videoId}${video.snippet.channelId}`}
          title={video.snippet.title}
          description={video.snippet.description}
          thumbnail={video.snippet.thumbnails}
        />
      ))}
    </PreviewsContainer>
  );
}

export default PreviewList;
