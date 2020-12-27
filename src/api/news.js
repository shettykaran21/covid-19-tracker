import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export default axios.create({
  baseURL: 'http://newsapi.org/v2',
  params: {
    apiKey: API_KEY,
  },
});
