import { setFavoriteVideosAction } from '../../providers/VideoProvider/VideoProvider.actions';
import { REACT_CHALLENGE_FAVORITE_VIDEOS } from '../constants';
import { addToLocalStorage, getFromLocalStorage } from './localStorage.helpers';

/* 
  adds a new favorite video to localStorage
  params:
    videoData: videoObject
    globalDispatch: VideoProvider dispatcher

  return: void
*/
export const addFavoriteVideo = (videoData, globalDispatch) => {
  const videoList = getFromLocalStorage(REACT_CHALLENGE_FAVORITE_VIDEOS) || [];
  videoList.push(videoData);
  addToLocalStorage(videoList, REACT_CHALLENGE_FAVORITE_VIDEOS);
  globalDispatch(setFavoriteVideosAction(videoList));
};

/* 
  removes a favorite video from localStorage
  params:
    videoId: videoObject id
    globalDispatch: VideoProvider dispatcher
  return: void
*/
export const removeFavoriteVideo = (videoId, globalDispatch) => {
  const data = getFromLocalStorage(REACT_CHALLENGE_FAVORITE_VIDEOS);
  const updatedList = data.filter((video) => video.id.videoId !== videoId);
  addToLocalStorage(updatedList, REACT_CHALLENGE_FAVORITE_VIDEOS);

  globalDispatch(setFavoriteVideosAction(updatedList));
};

/* 
  finds video by id
  params:
    videos: array of videos object
    videoId: videoId of video to find
  return: void
*/
export const findVideoById = (videos, videoId) => {
  return videos.find((video) => video.id.videoId === videoId);
};
