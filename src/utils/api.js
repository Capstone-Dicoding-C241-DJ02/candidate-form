import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const api = (params = {}) =>
  axios.create({
    params,
    baseURL: BASE_URL,
    withCredentials: true,
  });

export default api;
