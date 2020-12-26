import axios from 'axios';

const url = 'http://newsapi.org/v2';

export default axios.create({
  baseURL: url,
});
