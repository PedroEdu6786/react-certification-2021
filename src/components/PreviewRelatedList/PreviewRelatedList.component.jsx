import React from 'react';
import { Image, Text } from '../../theme/components/Foundation.component';
import {
  PreviewContainer,
  RelatedLink,
  RelatedVideoContainer,
} from './PreviewRelatedList.styles';

export const renderRelatedVideos = (video, path) => {
  const { snippet, id } = video;

  const url = `${path}${video.id.videoId}`;

  return (
    <RelatedLink to={url} key={`${snippet.channelId}${id.videoId}`}>
      <RelatedVideoContainer>
        <Image src={snippet.thumbnails.medium.url} w="100px" h="80px" />
        <Text fontSize=".9rem" fontWeight="bold">
          {snippet.title}
        </Text>
      </RelatedVideoContainer>
    </RelatedLink>
  );
};

function PreviewRelatedList({ videos, path }) {
  return (
    <PreviewContainer>
      {videos.map((video) => renderRelatedVideos(video, path))}
    </PreviewContainer>
  );
}

PreviewRelatedList.defaultProps = {
  videos: [],
};

export default PreviewRelatedList;
