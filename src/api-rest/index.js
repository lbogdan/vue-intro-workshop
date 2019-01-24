import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

export function getMovies() {
  return api.get('movies').then(res => res.data);
}

export function saveMovie(movie) {
  const { id } = movie;
  return api.put(`movies/${id}`, movie);
}

export function getMovie(id) {
  return api.get(`movies/${id}`).then(res => res.data);
}
