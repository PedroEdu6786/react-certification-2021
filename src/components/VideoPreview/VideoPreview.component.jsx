import React from 'react';
import {
  InfoContainer,
  Thumbnail,
  ThumbnailContainer,
  VideoPreviewContainer,
  VideoPreviewDescription,
  VideoPreviewTitle,
} from './VideoPreview.styles';

function VideoPreview({ title, description, thumbnail }) {
  const { medium: image } = thumbnail;
  return (
    <>
      <VideoPreviewContainer>
        {/* Image Container */}
        <ThumbnailContainer>
          <Thumbnail src={image.url} />
        </ThumbnailContainer>

        {/* Title and Video description */}
        <InfoContainer>
          <VideoPreviewTitle as="h3">{title}</VideoPreviewTitle>
          <VideoPreviewDescription>{description}</VideoPreviewDescription>
        </InfoContainer>
      </VideoPreviewContainer>
    </>
  );
}

export default VideoPreview;
