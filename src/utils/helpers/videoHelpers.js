import {
  removeFavoriteVideosAction,
  setFavoriteVideosAction,
} from '../../providers/VideoProvider/VideoProvider.actions';

const addVideo = (videoData) => {
  let favoriteList = localStorage.getItem('REACT-CHALLENGE-FAVORITE-VIDEOS') || [];
  favoriteList = favoriteList.length > 0 ? JSON.parse(favoriteList) : [];
  favoriteList.push(videoData);
  localStorage.setItem('REACT-CHALLENGE-FAVORITE-VIDEOS', JSON.stringify(favoriteList));

  return favoriteList;
};

const removeVideo = (videoId) => {
  let favoriteList = localStorage.getItem('REACT-CHALLENGE-FAVORITE-VIDEOS') || [];

  let updatedList = [];
  if (favoriteList.length > 0) {
    favoriteList = JSON.parse(favoriteList);
    updatedList = favoriteList.filter((video) => video.id.videoId !== videoId);
  }

  localStorage.setItem('REACT-CHALLENGE-FAVORITE-VIDEOS', JSON.stringify(updatedList));

  return updatedList;
};

export const addFavoriteVideo = (videoData, globalDispatch) => {
  const data = addVideo(videoData);
  globalDispatch(setFavoriteVideosAction(data));
};

export const removeFavoriteVideo = (videoId, globalDispatch) => {
  const data = removeVideo(videoId);
  globalDispatch(removeFavoriteVideosAction(data));
};

export const findVideoById = (videos, videoId) => {
  return videos.find((video) => video.id.videoId === videoId);
};
