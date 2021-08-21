import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import PreviewRelatedList from '../../components/PreviewRelatedList';

import { BodyContainer } from './VideoDetails.styles';
import VideosContext from '../../providers/VideoProvider/VideoContext';
import VideoDetailsContent from '../../components/VideoDetailsContent/VideoDetailsContent.component';

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
    favoriteList.push(videoData);
    localStorage.setItem('REACT-CHALLENGE-FAVORITE-VIDEOS', JSON.stringify(favoriteList));
  };

  return (
    <BodyContainer>
      <VideoDetailsContent
        videoId={videoId}
        videoData={videoData}
        isAuthenticated={isAuthenticated}
        handleFavoriteVideo={handleFavoriteVideo}
      />
      {videos && <PreviewRelatedList videos={videos} />}
    </BodyContainer>
  );
}

export default VideoDetails;
