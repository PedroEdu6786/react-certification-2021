import axios from 'axios';
import { YOUTUBE_MAX_RESULTS } from '../constants';

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
