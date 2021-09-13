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
import { getFromLocalStorage } from '../../utils/helpers/localStorage.helpers';
import { setFavoriteVideosAction } from '../../providers/VideoProvider/VideoProvider.actions';
import { REACT_CHALLENGE_FAVORITE_VIDEOS } from '../../utils/constants';

function VideoDetails() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const { videoId } = useParams();
  const { globalState, globalDispatch } = useContext(VideoContext);

  const { favoriteVideos } = globalState;

  // re renders component when the video has been changed for preview list video
  useEffect(() => {
    const videoData = favoriteVideos && findVideoById(favoriteVideos, videoId);
    setPlayingVideo(videoData);

    const favoriteList = getFromLocalStorage(REACT_CHALLENGE_FAVORITE_VIDEOS);
    if (!favoriteVideos) globalDispatch(setFavoriteVideosAction(favoriteList));

    // eslint-disable-next-line
  }, [videoId]);

  // re renders component when either favoriteVideos or page updates
  // finds video page details for videoId parameter
  useEffect(() => {
    const videoData = favoriteVideos && findVideoById(favoriteVideos, videoId);
    if (!playingVideo) setPlayingVideo(videoData);

    // eslint-disable-next-line
  }, [favoriteVideos, playingVideo]);

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
