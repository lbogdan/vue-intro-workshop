import axios from 'axios';

const apiPort = process.env.VUE_APP_API_PORT || 8000;

const api = axios.create({
  baseURL:
    window.location.host.indexOf('codesandbox') === -1
      ? `http://localhost:${apiPort}/`
      : 'https://lpykmjrl9l.sse.codesandbox.io/',
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
