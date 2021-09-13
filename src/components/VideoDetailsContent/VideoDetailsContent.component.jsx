import React from 'react';
import {
  Heading,
  OutlineButton,
  Text,
} from '../../theme/components/Foundation.component';
import {
  VideoContent,
  VideoDataContainer,
  VideoPlayer,
} from './VideoDetailsContent.styles';

function VideoDetailsContent({
  videoId,
  videoData,
  isAuthenticated,
  isFavoriteVideo,
  addFavoriteVideo,
  removeFavoriteVideo,
}) {
  const handleFavoriteVideo = () => {
    return isFavoriteVideo ? (
      <OutlineButton mt="1rem" onClick={removeFavoriteVideo}>
        Remove from favorites
      </OutlineButton>
    ) : (
      <OutlineButton mt="1rem" onClick={addFavoriteVideo}>
        Add to favorites
      </OutlineButton>
    );
  };

  return (
    <VideoContent>
      <VideoPlayer src={`https://www.youtube.com/embed/${videoId}`} />
      {videoData && (
        <VideoDataContainer>
          <Heading>{videoData.snippet.title}</Heading>
          <Text fontSize=".9rem">{videoData.snippet.description}</Text>
          {isAuthenticated && handleFavoriteVideo()}
        </VideoDataContainer>
      )}
    </VideoContent>
  );
}

export default VideoDetailsContent;
