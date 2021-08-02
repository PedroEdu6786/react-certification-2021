import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import PreviewRelatedList from '../../components/PreviewRelatedList/PreviewRelatedList';
import { Heading, Text } from '../../theme/components/Foundation.component';
import { BodyContainer, VideoContent, VideoPlayer } from './VideoDetails.styles';
import Context from '../../store/context';

function VideoDetails() {
  const { videoId } = useParams();
  const { globalState } = useContext(Context);

  const { videos } = globalState;

  useEffect(() => {}, [videoId, videos]);

  const videoData = videos.items.find((video) => video.id.videoId === videoId);

  return (
    <BodyContainer>
      <VideoContent>
        <VideoPlayer src={`https://www.youtube.com/embed/${videoId}`} />
        <Heading>{videoData.snippet.title}</Heading>
        <Text fontSize=".9rem">{videoData.snippet.description}</Text>
      </VideoContent>
      <PreviewRelatedList videos={videos} />
    </BodyContainer>
  );
}

export default VideoDetails;
