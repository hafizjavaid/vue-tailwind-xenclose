import axios from 'axios';

const config = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};
export default axios.create(config);
