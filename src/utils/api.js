import axios from 'axios';

const BASE_URL = 'http://34.128.73.230:8000';

const api = (params = {}) =>
  axios.create({
    params,
    baseURL: BASE_URL,
    withCredentials: true,
  });

export default api;
