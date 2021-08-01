import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import PreviewRelatedList from '../../components/PreviewRelatedList/PreviewRelatedList';
import { Heading, Text } from '../../theme/components/Foundation.component';
import { BodyContainer, VideoContent, VideoPlayer } from './VideoDetails.styles';
import videos from '../../mocks/videos.json';

function VideoDetails() {
  const { videoId } = useParams();

  useEffect(() => {}, [videoId]);
  return (
    <BodyContainer>
      <VideoContent>
        <VideoPlayer src={`https://www.youtube.com/embed/${videoId}`} />
        <Heading>Title</Heading>
        <Text fontSize=".9rem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, possimus. Vitae
          laborum recusandae nobis eum quo amet excepturi provident voluptas. Facilis
          distinctio nobis debitis repudiandae minima. Recusandae magni aut odit!
        </Text>
      </VideoContent>
      <PreviewRelatedList videos={videos} />
    </BodyContainer>
  );
}

export default VideoDetails;
