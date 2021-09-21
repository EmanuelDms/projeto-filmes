import axios from 'axios';

const baseURL = 'https://sujeitoprogramador.com/';

// ALL DEFAULT CONFIGURATION HERE

const api = axios.create({
  baseURL,
});

export default api;
