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
  handleFavoriteVideo,
}) {
  return (
    <VideoContent>
      <VideoPlayer src={`https://www.youtube.com/embed/${videoId}`} />
      {videoData && (
        <VideoDataContainer>
          <Heading>{videoData.snippet.title}</Heading>
          <Text fontSize=".9rem">{videoData.snippet.description}</Text>
          {isAuthenticated && (
            <OutlineButton mt="1rem" onClick={handleFavoriteVideo}>
              Add to favorites
            </OutlineButton>
          )}
        </VideoDataContainer>
      )}
    </VideoContent>
  );
}

export default VideoDetailsContent;
