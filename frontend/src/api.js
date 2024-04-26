import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Change this to your API base URL
});

export default api;
