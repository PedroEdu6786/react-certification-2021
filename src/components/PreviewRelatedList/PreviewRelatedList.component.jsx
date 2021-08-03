import React from 'react';
import { Image, Text } from '../../theme/components/Foundation.component';
import {
  PreviewContainer,
  RelatedLink,
  RelatedVideoContainer,
} from './PreviewRelatedList.styles';

const renderRelatedVideos = (video) => {
  const { snippet, id } = video;
  return (
    <RelatedLink to={`/${id.videoId}`} key={`${snippet.channelId}${id.videoId}`}>
      <RelatedVideoContainer>
        <Image src={snippet.thumbnails.medium.url} w="100px" h="80px" />
        <Text fontSize=".9rem" fontWeight="bold">
          {snippet.title}
        </Text>
      </RelatedVideoContainer>
    </RelatedLink>
  );
};

function PreviewRelatedList({ videos }) {
  return <PreviewContainer>{videos.items.map(renderRelatedVideos)}</PreviewContainer>;
}

PreviewRelatedList.defaultProps = {
  videos: { items: [] },
};

export default PreviewRelatedList;
