import axios from '../services/axios';
const resource = 'r-api/?api=filmes';

const movieRepository = {
  get() {
    return axios.get(resource);
  },
  getMovie(id) {
    return axios.get(`${resource}/${id}`);
  },
};

export default movieRepository;
