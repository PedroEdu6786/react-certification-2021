import React from 'react';
import VideoPreview from '../VideoPreview';
import { PreviewsContainer } from './PreviewList.styles';

export const renderVideoItem = (video) => (
  <VideoPreview
    key={`${video.id.videoId}${video.snippet.channelId}`}
    title={video.snippet.title}
    description={video.snippet.description}
    thumbnail={video.snippet.thumbnails}
    url={video.id.videoId}
  />
);

function PreviewList({ videos }) {
  return (
    <PreviewsContainer data-testid="previewList" id="previewList">
      {videos.items.map(renderVideoItem)}
    </PreviewsContainer>
  );
}

PreviewList.defaultProps = {
  videos: { items: [] },
};

export default PreviewList;
