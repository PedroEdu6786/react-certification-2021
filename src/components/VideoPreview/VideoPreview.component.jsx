import React, { useState } from 'react';
import { GhostButton } from '../../theme/components/Foundation.component';
import { addFavoriteVideo, removeFavoriteVideo } from '../../utils/helpers/video.helpers';
import {
  InfoContainer,
  Thumbnail,
  ThumbnailContainer,
  VideoLink,
  VideoPreviewContainer,
  VideoPreviewDescription,
  VideoPreviewTitle,
} from './VideoPreview.styles';

export const showFavoriteButton = (
  isFavoriteVideo,
  handleAddFavorite,
  handleRemoveFavorite
) => {
  return !isFavoriteVideo ? (
    <GhostButton onClick={handleAddFavorite}>Add to favorites</GhostButton>
  ) : (
    <GhostButton onClick={handleRemoveFavorite}>Remove from Favorites</GhostButton>
  );
};

function VideoPreview({
  videoData,
  isAuthenticated,
  globalDispatch,
  isFavoriteVideo,
  url,
}) {
  const [visible, setVisible] = useState(false);

  const { id } = videoData;
  const { title, description, thumbnails } = videoData.snippet;
  const { medium: image } = thumbnails;

  const handleAddFavorite = () => addFavoriteVideo(videoData, globalDispatch);
  const handleRemoveFavorite = () => removeFavoriteVideo(id.videoId, globalDispatch);

  const handleVisibility = () => visible && isAuthenticated;

  return (
    <VideoPreviewContainer
      as="article"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <VideoLink to={url}>
        {/* Image Container */}
        <ThumbnailContainer>
          <Thumbnail src={image.url} />
        </ThumbnailContainer>

        {/* Title and Video description */}
        <InfoContainer>
          <VideoPreviewTitle as="h3">{title}</VideoPreviewTitle>
          <VideoPreviewDescription>{description}</VideoPreviewDescription>
        </InfoContainer>
      </VideoLink>
      {handleVisibility() &&
        showFavoriteButton(isFavoriteVideo, handleAddFavorite, handleRemoveFavorite)}
    </VideoPreviewContainer>
  );
}

VideoPreview.defaultProps = {
  url: '/',
  isFavoriteVideo: false,
  globalDispatch: null,
  isAuthenticated: false,
};

export default VideoPreview;
