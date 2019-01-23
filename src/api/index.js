import clone from 'clone';

const initialMovies = [
  {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    genre: 'Action, Adventure, Fantasy',
    plot:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg',
    comment: '',
  },
  {
    id: 2,
    title: 'Black Swan',
    year: 2010,
    genre: 'Drama, Thriller',
    plot:
      'A committed dancer wins the lead role in a production of Tchaikovskys "Swan Lake" only to find herself struggling to maintain her sanity.',
    poster:
      'https://images-na.ssl-images-amazon.com/images/I/615yWgAir2L._SY500_.jpg',
    comment: '',
  },
  {
    id: 3,
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama',
    plot:
      'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51iOANjtCQL.jpg',
    comment: '',
  },
  {
    id: 4,
    title: 'The Godfather: Part II',
    year: 1974,
    genre: 'Crime, Drama',
    plot:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/41V2AB34KCL.jpg',
    comment: '',
  },
];
const lsKey = '_viw_movies';

function lsSaveMovies(movies) {
  localStorage.setItem(lsKey, JSON.stringify(movies));
}

function lsLoadMovies() {
  const moviesJson = localStorage.getItem(lsKey);
  if (!moviesJson) {
    lsSaveMovies(initialMovies);
    return initialMovies;
  }
  return JSON.parse(moviesJson);
}

function randomTimeout(cb) {
  setTimeout(cb, 500 + 500 * Math.random());
}

let movies = lsLoadMovies();

export function getMovies() {
  return new Promise(resolve => {
    randomTimeout(() => resolve(clone(movies)));
  });
}

export function saveMovie(movie) {
  return new Promise(resolve => {
    randomTimeout(() => {
      const index = movies.findIndex(m => m.id === movie.id);
      if (index !== -1) {
        movies[index] = clone(movie);
        lsSaveMovies(movies);
      }
      resolve();
    });
  });
}

export function getMovie(id) {
  return new Promise(resolve => {
    randomTimeout(() => {
      const movie = movies.find(m => m.id === id);
      resolve(clone(movie));
    });
  });
}
