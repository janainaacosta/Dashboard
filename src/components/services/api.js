import axios from 'axios';

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br"
});

export default api;