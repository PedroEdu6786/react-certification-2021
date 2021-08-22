import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import PreviewRelatedList from '../../components/PreviewRelatedList';

import VideoContext from '../../providers/VideoProvider/VideoContext';
import VideoDetailsContent from '../../components/VideoDetailsContent/VideoDetailsContent.component';
import { BodyContainer } from '../../theme/components/Foundation.component';
import {
  findVideoById,
  addFavoriteVideo,
  removeFavoriteVideo,
} from '../../utils/helpers/video.helpers';

function VideoDetails() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const { videoId } = useParams();
  const { globalState, globalDispatch } = useContext(VideoContext);

  const { favoriteVideos } = globalState;

  // re renders component when either favoriteVideos or page updates
  useEffect(() => {
    // finds video page details for videoId parameter
    const videoData = favoriteVideos && findVideoById(favoriteVideos, videoId);
    if (!playingVideo) setPlayingVideo(videoData);

    // eslint-disable-next-line
  }, [favoriteVideos, playingVideo]);

  useEffect(() => {
    // finds video page details for videoId parameter
    const videoData = favoriteVideos && findVideoById(favoriteVideos, videoId);
    setPlayingVideo(videoData);
    // eslint-disable-next-line
  }, [videoId]);

  const isFavoriteVideo = favoriteVideos && findVideoById(favoriteVideos, videoId);

  return (
    <BodyContainer>
      <VideoDetailsContent
        videoId={videoId}
        videoData={playingVideo}
        isAuthenticated
        isFavoriteVideo={isFavoriteVideo}
        addFavoriteVideo={() => addFavoriteVideo(playingVideo, globalDispatch)}
        removeFavoriteVideo={() => removeFavoriteVideo(videoId, globalDispatch)}
      />
      {favoriteVideos && (
        <PreviewRelatedList videos={favoriteVideos} path="/favorites/" />
      )}
    </BodyContainer>
  );
}

export default VideoDetails;
