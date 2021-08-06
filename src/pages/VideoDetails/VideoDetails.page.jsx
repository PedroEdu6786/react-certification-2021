import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import PreviewRelatedList from '../../components/PreviewRelatedList';
import { Heading, Text } from '../../theme/components/Foundation.component';
import { BodyContainer, VideoContent, VideoPlayer } from './VideoDetails.styles';
import VideosContext from '../../providers/VideosProvider/VideosContext';

function VideoDetails() {
  const { videoId } = useParams();
  const { globalState } = useContext(VideosContext);

  const { videos } = globalState;

  // re renders component when either videos or page updates
  useEffect(() => {}, [videoId, videos]);

  // finds video page details for videoId parameter
  const videoData = videos && videos.items.find((video) => video.id.videoId === videoId);

  return (
    <BodyContainer>
      <VideoContent>
        <VideoPlayer src={`https://www.youtube.com/embed/${videoId}`} />
        {videoData && (
          <>
            <Heading>{videoData.snippet.title}</Heading>
            <Text fontSize=".9rem">{videoData.snippet.description}</Text>
          </>
        )}
      </VideoContent>
      {videos && <PreviewRelatedList videos={videos} />}
    </BodyContainer>
  );
}

export default VideoDetails;
