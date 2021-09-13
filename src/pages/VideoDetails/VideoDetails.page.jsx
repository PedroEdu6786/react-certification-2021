import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import PreviewRelatedList from '../../components/PreviewRelatedList';

import VideosContext from '../../providers/VideoProvider/VideoContext';
import VideoDetailsContent from '../../components/VideoDetailsContent/VideoDetailsContent.component';

import { BodyContainer } from '../../theme/components/Foundation.component';
import {
  findVideoById,
  addFavoriteVideo,
  removeFavoriteVideo,
} from '../../utils/helpers/video.helpers';

function VideoDetails() {
  const { videoId } = useParams();
  const { isAuthenticated } = useAuth0();
  const { globalState, globalDispatch } = useContext(VideosContext);

  const { videos, favoriteVideos } = globalState;

  // re renders component when either videos or page updates
  useEffect(() => {}, [videoId, videos]);

  // finds video page details for videoId parameter
  const videoData = videos && findVideoById(videos.items, videoId);

  const isFavoriteVideo = favoriteVideos && findVideoById(favoriteVideos, videoId);

  return (
    <BodyContainer>
      <VideoDetailsContent
        videoId={videoId}
        videoData={videoData}
        isAuthenticated={isAuthenticated}
        isFavoriteVideo={isFavoriteVideo}
        addFavoriteVideo={() => addFavoriteVideo(videoData, globalDispatch)}
        removeFavoriteVideo={() => removeFavoriteVideo(videoId, globalDispatch)}
      />
      {videos && <PreviewRelatedList videos={videos.items} path="/" />}
    </BodyContainer>
  );
}

export default VideoDetails;
