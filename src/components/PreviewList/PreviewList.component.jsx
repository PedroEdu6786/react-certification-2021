import React, { useContext } from 'react';
import VideoContext from '../../providers/VideoProvider/VideoContext';
import { findVideoById } from '../../utils/helpers/video.helpers';
import VideoPreview from '../VideoPreview';
import { PreviewsContainer } from './PreviewList.styles';

export const renderVideoItem = (
  video,
  favoriteVideos,
  globalDispatch,
  path,
  isAuthenticated
) => {
  const isFavoriteVideo = findVideoById(favoriteVideos, video.id.videoId);
  return (
    <VideoPreview
      key={`${video.id.videoId}${video.snippet.channelId}`}
      videoData={video}
      globalDispatch={globalDispatch}
      url={`${path}${video.id.videoId}`}
      isFavoriteVideo={isFavoriteVideo}
      isAuthenticated={isAuthenticated}
    />
  );
};

function PreviewList({ videos, favoriteVideos, path, isAuthenticated }) {
  const { globalDispatch } = useContext(VideoContext);

  return (
    <PreviewsContainer data-testid="previewList" id="previewList">
      {videos.map((video) =>
        renderVideoItem(video, favoriteVideos, globalDispatch, path, isAuthenticated)
      )}
    </PreviewsContainer>
  );
}

PreviewList.defaultProps = {
  videos: [],
  path: '/',
  favoriteVideos: [],
};

export default PreviewList;
