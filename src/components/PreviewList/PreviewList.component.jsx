import React from 'react';
import VideoPreview from '../VideoPreview';
import { PreviewsContainer } from './PreviewList.styles';

export const renderVideoItem = (video, path) => (
  <VideoPreview
    key={`${video.id.videoId}${video.snippet.channelId}`}
    title={video.snippet.title}
    description={video.snippet.description}
    thumbnail={video.snippet.thumbnails}
    url={`${path}${video.id.videoId}`}
  />
);

function PreviewList({ videos, path }) {
  return (
    <PreviewsContainer data-testid="previewList" id="previewList">
      {videos.map((video) => renderVideoItem(video, path))}
    </PreviewsContainer>
  );
}

PreviewList.defaultProps = {
  videos: [],
  path: '/',
};

export default PreviewList;
