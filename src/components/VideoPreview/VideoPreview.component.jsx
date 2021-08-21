import React from 'react';
import {
  InfoContainer,
  Thumbnail,
  ThumbnailContainer,
  VideoLink,
  VideoPreviewContainer,
  VideoPreviewDescription,
  VideoPreviewTitle,
} from './VideoPreview.styles';

function VideoPreview({ title, description, thumbnail, url }) {
  const { medium: image } = thumbnail || { medium: { url: '' } };

  return (
    <VideoPreviewContainer>
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
    </VideoPreviewContainer>
  );
}

VideoPreview.defaultProps = {
  url: '/',
};

export default VideoPreview;
