import axios from 'axios';

const url =
  'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=583a8a26978845cdb9a7b838b2ea3854';

export default axios.create({
  baseURL: url,
});
