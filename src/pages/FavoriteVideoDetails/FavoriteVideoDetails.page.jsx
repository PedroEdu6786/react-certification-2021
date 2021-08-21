import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import PreviewRelatedList from '../../components/PreviewRelatedList';

import VideoContext from '../../providers/VideoProvider/VideoContext';
import VideoDetailsContent from '../../components/VideoDetailsContent/VideoDetailsContent.component';
import {
  addFavoriteVideo,
  setFavoriteVideosAction,
} from '../../providers/VideoProvider/VideoProvider.actions';
import { BodyContainer } from '../../theme/components/Foundation.component';

function VideoDetails() {
  const { videoId } = useParams();
  const { globalState, globalDispatch } = useContext(VideoContext);

  const { favoriteVideos } = globalState;

  // re renders component when either favoriteVideos or page updates
  useEffect(() => {}, [videoId, favoriteVideos]);

  // finds video page details for videoId parameter
  const videoData =
    favoriteVideos && favoriteVideos.find((video) => video.id.videoId === videoId);

  const handleFavoriteVideo = () => {
    const data = addFavoriteVideo(videoData);
    globalDispatch(setFavoriteVideosAction(data));
  };

  return (
    <BodyContainer>
      <VideoDetailsContent
        videoId={videoId}
        videoData={videoData}
        isAuthenticated
        handleFavoriteVideo={handleFavoriteVideo}
      />
      {favoriteVideos && (
        <PreviewRelatedList videos={favoriteVideos} path="/favorites/" />
      )}
    </BodyContainer>
  );
}

export default VideoDetails;
