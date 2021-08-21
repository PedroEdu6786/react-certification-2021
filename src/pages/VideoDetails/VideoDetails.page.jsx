import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import PreviewRelatedList from '../../components/PreviewRelatedList';

import VideosContext from '../../providers/VideoProvider/VideoContext';
import VideoDetailsContent from '../../components/VideoDetailsContent/VideoDetailsContent.component';
import {
  addFavoriteVideo,
  setFavoriteVideosAction,
} from '../../providers/VideoProvider/VideoProvider.actions';
import { BodyContainer } from '../../theme/components/Foundation.component';

function VideoDetails() {
  const { videoId } = useParams();
  const { isAuthenticated } = useAuth0();
  const { globalState, globalDispatch } = useContext(VideosContext);

  const { videos } = globalState;

  // re renders component when either videos or page updates
  useEffect(() => {}, [videoId, videos]);

  // finds video page details for videoId parameter
  const videoData = videos && videos.items.find((video) => video.id.videoId === videoId);

  const handleFavoriteVideo = () => {
    const data = addFavoriteVideo(videoData);
    globalDispatch(setFavoriteVideosAction(data));
  };

  return (
    <BodyContainer>
      <VideoDetailsContent
        videoId={videoId}
        videoData={videoData}
        isAuthenticated={isAuthenticated}
        handleFavoriteVideo={handleFavoriteVideo}
      />
      {videos && <PreviewRelatedList videos={videos.items} path="/" />}
    </BodyContainer>
  );
}

export default VideoDetails;
