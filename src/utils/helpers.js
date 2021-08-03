import axios from 'axios';
import { YOUTUBE_MAX_RESULTS } from './constants';

const SNIPPET = 'snippet';
const VIDEO = 'video';

// youtube api axios config
export const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: SNIPPET,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    maxResults: YOUTUBE_MAX_RESULTS,
    type: VIDEO,
  },
});

// build query params helper function
/*
  example:
  const queryParams = buildQueryParams({
    q: query,
  });
*/
export const buildQueryParams = (data) => {
  return Object.entries(data)
    .map(([key, value]) => {
      let finalValue = value;
      if (Array.isArray(value)) {
        finalValue = value.join(',');
      }

      return `${key}=${encodeURI(finalValue)}`;
    })
    .join('&');
};
