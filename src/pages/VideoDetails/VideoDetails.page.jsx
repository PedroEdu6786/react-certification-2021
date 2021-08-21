import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import PreviewRelatedList from '../../components/PreviewRelatedList';
import {
  Heading,
  OutlineButton,
  Text,
} from '../../theme/components/Foundation.component';
import {
  BodyContainer,
  VideoContent,
  VideoDataContainer,
  VideoPlayer,
} from './VideoDetails.styles';
import VideosContext from '../../providers/VideoProvider/VideoContext';

function VideoDetails() {
  const { videoId } = useParams();
  const { isAuthenticated } = useAuth0();
  const { globalState } = useContext(VideosContext);

  const { videos } = globalState;

  // re renders component when either videos or page updates
  useEffect(() => {}, [videoId, videos]);

  // finds video page details for videoId parameter
  const videoData = videos && videos.items.find((video) => video.id.videoId === videoId);

  const handleFavoriteVideo = () => {
    let favoriteList = localStorage.getItem('REACT-CHALLENGE-FAVORITE-VIDEOS') || [];
    favoriteList = JSON.parse(favoriteList);
    console.log(favoriteList);
    favoriteList.push(videoData);
    localStorage.setItem('REACT-CHALLENGE-FAVORITE-VIDEOS', JSON.stringify(favoriteList));
  };

  return (
    <BodyContainer>
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
      {videos && <PreviewRelatedList videos={videos} />}
    </BodyContainer>
  );
}

export default VideoDetails;
