# Day 1

## Challenge 0. Warming up: @vue/cli

- make sure you have the right versions

```sh
# run in terminal
node -v
# 10.15.0 (can also be 8.x.y or 11.x.y)
yarn -v
# 1.13.0
vue -V
# 3.3.0
```

- if not already set, configure your git name and email

```sh
# run in terminal
git config --global user.name "Chuck Norris"
git config --global user.email "yahoo@chucknorris.com"
```

- create a new Vue project, explore the available features

```sh
# run in terminal
cd your_work_folder
vue create vue-test
```

- start the dev server, explore the project structure, try to edit files and see what happens:

```sh
# run in terminal
cd vue-test
yarn serve
```

- stop the dev server (Ctrl+C), clone the workshop github repository, change to the created folder, make sure you're in the `dev` branch, install the dependencies and open the folder in Visual Studio Code:

```sh
# run in terminal
cd your_work_folder
git clone https://github.com/lbogdan/vue-intro-workshop.git
cd vue-intro-workshop
git status
# On branch dev
yarn
code .
```

- from VSCode, open an integrated terminal (Ctrl + ` or Ctrl-Shift-P and search "new integrated terminal") and start the dev server:

```sh
# run in VSCode terminal
yarn serve
```

## Challenge 1. To get started, a bit of content (+)

- change `App` `<template>` to contain:

  - a `<h1>` containing the text "Star Wars: The Last Jedi (2017)"
  - a `<h2>` containing the text "Action, Adventure, Fantasy"
  - a `<p>` containing the text "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order."
  - an `<img>` with `src` set to "https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg" and `alt` set to "Movie poster"

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch1
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch0...ch1

## Challenge 2. Extracting state: interpolation {{ }} & v-bind (++)

- in `App`, define a `data()` function to return and object having the following properties: `title`, `year`, `genre`, `plot`, `poster`

```js
// App.vue
export default {
  name: 'app',
  data() {
    return {
      title: 'Star Wars: The Last Jedi',
      year: 2017,
      ...
    }
  }
}
```

- in `App`, replace static content from the `<template>` using state; use `{{ }}` interpolation for text and binding for `<image>` `src`

```html
<!-- App.vue -->
<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!--...-->
    <img v-bind:src="poster" alt="Movie poster" />
  </div>
</template>
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch2
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch1...ch2

## Challenge 3. Extracting component: component import & registration (+++)

- create a new file `src/components/MovieItem.vue`
- move template and state from `App` to `MovieItem`, remove `id` from root `<div>`, change `name` to "movie-item"
- register `MovieItem` inside `App` `<script>`:

```js
// App.vue
import MovieItem from `./components/MovieItem.vue';

export default {
  ...
  components: {
    MovieItem
  }
}
```

- render it in `App` `<template>`:

```html
<!-- App.vue -->
<movie-item />
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch3
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch2...ch3

## Challenge 4. Making things pretty (++)

- install `bootstrap` package:

```sh
# run in terminal
yarn add --dev bootstrap
```

- import the bootstrap css in `main.js`

```js
// main.js
import 'bootstrap/dist/css/bootstrap.css';
```

- add "container" class to `App` `<div>`
- change `MovieItem` `<template>` to use the following markup:

```html
<!-- MovieItem.vue -->
<div class="card mt-4">
  <div class="card-body">
    <h5 class="card-title">{{ title }} <small>({{ year }})</small></h5>
    <h6 class="card-subtitle text-muted">{{ genre }}</h6>
    <hr />
    <div class="row">
      <div class="col-sm-4">
        <img :src="poster" class="img-fluid" alt="Movie poster" />
      </div>
      <div class="col-sm-8"><p>{{ plot }}</p></div>
    </div>
  </div>
</div>
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch4
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch3...ch4

## Challenge 5. Editing comments: v-model on DOM input elements & v-on (+++)

- add a comment `<textarea>` and a `Clear comment` button to `MovieItem`, using the following markup:

```html
<!-- MovieItem.vue -->
<div class="row mt-4">
  <div class="col-md-8 form-group mb-0">
    <textarea
      class="form-control"
      rows="3"
      placeholder="Did you like this movie?"
    ></textarea>
    <button class="btn btn-primary mt-2">Clear comment</button>
  </div>
</div>
```

- add a new data property named `comment` and initialize it to an empty string
- 2-way bind it to the `<textarea>`:

```html
<!-- MovieItem.vue -->
<textarea v-model="comment"></textarea>
```

- disable the `<button>` when the comment is empty:

```html
<!-- MovieItem.vue -->
<button :disabled="comment.length === 0">Clear message</button>
```

- clear the comment when clicking the `<button>`

```html
<!-- MovieItem.vue -->
<button ... v-on:click="comment = ''"></button>
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch5
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch4...ch5

## Challenge 6. Counting words: methods (+++)

- add a method to `MovieItem` `methods` named `wordCount`, that receives a string argument and returns how many words it contains

```js
// MovieItem.vue
export default {
  ...
  methods: {
    wordCount(str) {
      // count logic here
    }
  }
}
```

> hint: use `Array.split()` to split the string into words and `Array.filter()` to filter empty words

- add a div under `<textarea>`, and using `{{ }}` interpolation, call the above method with `comment` as argument; add " words" suffix
- use interpolation to show "word" or "words" depending on the number of words
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch6
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch5...ch6

## Challenge 7. Style binding: :style (++)

- make the word count `<div>` red when the count is 0, green otherwise
  - use a style binding to set the CSS color property; use "limegreen" and "salmon" for colors

```html
<!-- MovieItem.vue -->
<div :style="{ color: condition ? 'limegreen' : 'salmon' }">...</div>
```

> bonus: debug how many times the `wordCount()` method is called

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch7
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch6...ch7

## Challenge 8. Counting words, take two: computeds (++)

- change the `wordCount` method into a `commentWordCount` computed
- it should receive no arguments, and work on `this.comment` directly

> bonus: debug how many times the computed method `commentWordCount()` method is called

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch8
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch7...ch8

## Challenge 9. Class binding: :class (+)

- refactor word count color to use classes instead of styles; use "text-danger" and "text-success" classes

```html
<!-- MovieItem.vue -->
<div class="[ condition ? 'text-success' : 'text-danger' ]">...</div>
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch9
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch8...ch9

## Challenge 10. A bit of refactoring (++)

- in `MovieItem`, move all data properties into an `item` object
- fix all references to movie properties throughout the component
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch10
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch9...ch10

## Challenge 11 Moving state to the parent: props (+++)

- in `App` `data()`, define a "movie" object and copy the properties from `MovieItem`
- in `MovieItem`, remove `item` from `data()`, and define it as a prop instead:

```js
// MovieItem.vue
export default {
  ...
  props: {
    item: {
      type: String,
      required: true
    }
  }
}
```

- in `App`, bind "item" to "movie" on the `<movie-item>` element

```html
<!-- App.vue -->
<movie-item :item="movie" />
```

- in `App` `data()`, add another object "movie2" with the following properties:

```js
// App.vue
{
  title: 'Black Swan',
  year: 2010,
  genre: 'Drama, Thriller',
  plot: 'A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.',
  poster: 'https://images-na.ssl-images-amazon.com/images/I/615yWgAir2L._SY500_.jpg'
}
```

- in `App` `<template>`, add another `<movie-item>` bound to "movie2"
- add class "mb-2" to `App` `<div>`
- check the console for errors, you'll have a few surprises! ;-)
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch11
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch10...ch11

## Challenge 12. A bit of responsiveness (+)

- display 2 cards per row on large screens:
  - in `App`, wrap the movie cards in a `<div class="row">`
  - in `MovieItem` `<template>`, wrap everything with a `<div class="col-lg-6 px-2>` div
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch12
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch11...ch12

## Challenge 13. Conditional rendering: v-if & v-else (+++)

- in `MovieItem`, add a `data()` property named "isEditing", initially set to `false`
- wrap the `<textarea>` and the word count `<div>` with a `<template v-if="isEditing">`
- add a `<div v-else>` immediately after the above `<template>` and show the comment prefixed by "Your comment: "
- if the comment is empty, display "No comment yet."
- change the "Clear comment" button's text to "Edit/Save comment", remove its old behavior and make it toggle the "isEditing" state
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch13
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch12...ch13

## Challenge 14. HTML rendering: v-html (++)

- define a "formattedComment" computed that returns "No comment yet." if the comment is empty, and "`Your comment: <b>...</b>`" otherwise
- set the previous `<div v-else>` content to the computed:

```html
<!-- MovieItem.vue -->
<div v-else v-html="formattedContent"></div>
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch14
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch13...ch14

## Challenge 15. Extracting MovieComment component (++++)

- extract the parts of `MovieItem` `<template>` and `<script>` that have to do with showing and editing of the comment to a new `MovieComment` component

> hint: create the new `MovieComment` component, move the comment part of the `MovieItem` `<template>` to it, import, register and render a `<movie-comment />` in place of the moved layout, and try to move / fix things around until you get rid of all the console errors and the previous functionality is restored

- in `MovieComment`, define a "comment" prop, bind it from `MovieItem`
- try to edit the comment and check the console for errors ;-)
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch15
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch14...ch15

## Challenge 16. Refactor MovieComment to handle v-model: v-model on Vue components & watchers (++++)

> hint: `<movie-comment v-model="item.comment">` is shorthand for `<movie-comment :value="item.comment" @input=item.comment = $event">`, where `$event` is a special Vue property set to the `input` event's payload

- in `MovieComment`, define "value" prop, move the "comment" prop to `data()` and set its initial value to the "value" prop

```js
// MovieComment.vue
export default {
  ...
  data() {
    return {
      ...
      comment: this.value
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
```

- in `MovieComment`, create an `editOrSave()` method which on save will emit an `input` event having the new comment value as payload:

```js
// MovieComment.vue
export default {
  ...
  methods: {
    editOrSave() {
      if (this.isEditing) {
        this.$emit('input', /* payload */, this.comment);
      }
    }
  }
}
```

- set the above method as the `<button>`'s `@click` handler
- in `MovieItem` `<template>`, replace the `:comment` binding to a `v-model` one
- try to change the comment from Vue devtools

> hint: it won't work, because `comment` is initialized to `v-model`'s `value` only when `MovieComment` is created (when `data()` is called)

- to fix this, add a watcher to update `comment` when `value` diff:

```js
// MovieComment
export default {
  ...
  watch: {
    value(newValue) {
      this.comment = newValue;
    }
  }
}
```

- add a "Cancel" button
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch16
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch15...ch16

## Challenge 17. List rendering: v-for (++)

- in `App` `data()`, replace "movie" and "movie2" with a "movies" array having the following content:

```js
// App.vue
export default {
  ...
  data() {
    return {
      movies: [
        {
          id: 1,
          title: 'Star Wars: The Last Jedi',
          year: 2017,
          genre: 'Action, Adventure, Fantasy',
          plot:
            'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          poster:
            'https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg',
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
          poster:
            'https://images-na.ssl-images-amazon.com/images/I/51iOANjtCQL.jpg',
          comment: '',
        },
        {
          id: 4,
          title: 'The Godfather: Part II',
          year: 1974,
          genre: 'Crime, Drama',
          plot:
            'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
          poster:
            'https://images-na.ssl-images-amazon.com/images/I/41V2AB34KCL.jpg',
          comment: '',
        },
      ],
    }
  }
}
```

- in `App` `<template>`, replace the two static `<movie-item>`s with a dynamic `<movie-item>` list, iterating over `movies`:

```html
<!-- App.vue -->
<movie-list v-for="movie in movies" :item="movie" :key="movie.id" />
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch17
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch16...ch17

# Day 2

## Challenge 18. Emulating an API: component life-cycle hooks - created() (+++)

- create a new file `src/api/index.js` with the contents from https://github.com/lbogdan/vue-intro-workshop/blob/master/src/api/index.js
- install `clone` package, required by the API:

```sh
# run in terminal
yarn add --dev clone
```

- in `App`, remove movie data and initialize it to an empty array
- import the `getMovies()` method from `api` and call it in the `created()` life-cycle hook to load movies data:

```js
// App.vue
import { getMovies } from './api';

export default {
  ...
  created() {
    getMovies().then(function (movies) {
      this.movies = movies;
    });
  }
}
```

- it doesn't work, why?
- use an arrow function inside `then(...)`, to keep `this` pointing at the component instance inside the function, too
- create a new component in `src/components/LoadingIndicator.vue` which receives an optional `message` string prop, with the following markup:

```html
<!-- LoadingIndicator.vue -->
<div class="row">
  <div class="col d-flex align-items-center justify-content-center mt-5">
    <div class="spinner-border mr-2" role="status" aria-hidden="true"></div>
    <strong v-if="message">{{ message }}</strong>
  </div>
</div>
```

- in `App`, add an `isLoading` `data()` property, and show the `LoadingIndicator` while the movies are loading
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch18
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch17...ch18

## Challenge 19. A bit of refactoring

- remove all movie logic from `App` to a new `src/pages/MovieList.vue` component

> hint: pay attention to the modules import paths!

- change all module import paths in `App` and `MovieList` to use `@` alias which points to the `src` folder (e.g. `./src/pages/MovieList.vue` becomes `@/pages/MovieList.vue`)
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch19
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch18...ch19

## Challenge 20. Persist those comments: deep watchers (+++)

- in `MovieItem`, define a deep watcher for `item`, and emit a `change` event with the new `item` value as payload

```js
// MovieItem.js
export default {
  ...
  watch: {
    item: {
      handler(newValue) {
        this.$emit('change', newValue);
      },
      deep: true
    }
  }
}
```

- in `MovieList`, listen for the `change` event and use the `saveMovie()` API method to save the movie:

```html
<!-- MovieList.vue -->
<movie-item ... @change="onChange" />
```

```js
// MovieList.vue
import { getMovies, saveMovie } from '@/api';

export default {
  ...
  methods: {
    onChange(movie) { // movie is the event payload sent by $emit()
      saveMovie(movie);
    }
  }
}
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch20
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch19...ch20

## Challenge 21. A bit of routing: vue-router & &lt;router-view&gt; (+++)

- install `vue-router` package:

```sh
# run in terminal
yarn add --dev vue-router
```

- create a new file `src/router/index.js` with the following content:

```js
// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieList from '@/pages/MovieList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieList,
    },
  ],
});
```

- in `main.js`, import the router and give it as a property to `new Vue({...})`:

```js
// main.js
...
import router from './router'; // imports router/index.js

new Vue({
  ...,
  router // ES6 short for "router: router"
});
```

- in `App`, remove all references to `MovieList`, and add the `<router-view />` inside the `<div id="app">`
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch21
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch20...ch21

## Challenge 22. Let's see a movie: &lt;router-link&gt; (+++)

- create a new component `src/pages/Movie.vue`, which accepts `id` as a required string prop, and displays it in the `<template>`:

```html
<!-- Movie.vue -->
<template>
  <div>Movie #{{ id }}</div>
</template>
```

- in `router\index.js`, add a new route `/movie/:id` that displays the previously created component:

```js
// router/index.js
...
import Movie from '@/pages/Movie.vue';

export default new VueRouter({
  ...
  routes: [
    ...
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie,
      props: true, // will send "id" as a prop to the component
    }
  ]
});
```

- in `MovieItem.vue`, wrap the title inside a `<router-link>` that will navigate to the route named `movie`, with the movie id:

```html
<!-- MovieItem.vue -->
<router-link
  class="card-link text-dark"
  :to="{ name: 'movie', params: { id: item.id } }"
>
  <h5 class="card-title">{{ item.title }} <small>({{ item.year }})</small></h5>
</router-link>
```

- fix the prop type mismatch ;-)
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch22
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch21...ch22

## Challenge 23. Editing movies (+++++)

- edit `Movie.vue` component to show a form to edit the movie
- for the form, use the following markup:

```html
<!-- Movie.vue -->
<form>
  <div class="row justify-content-center">
    <div class="col" style="max-width: 800px;">
      <h2 class="mt-4">Edit movie</h2>
      <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            <label for="title">Title</label>
            <input class="form-control" id="title" placeholder="Enter title" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="year">Year</label>
            <input class="form-control" id="year" placeholder="Enter year" />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="plot">Plot</label>
        <textarea
          class="form-control"
          id="plot"
          placeholder="Enter plot"
          rows="5"
        />
      </div>
      <button class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-outline-danger ml-2">Cancel</button>
    </div>
  </div>
</form>
```

- hints:

  - use the API method `getMovie(id)` to get the movie data; it takes an integer `id` argument and returns a promise that resolves to a movie object
  - use the API method `saveMovie(movie)`, the same as you did in `MovieList.vue`, and wait for it to finish (wait for the returned promise to resolve)
  - while waiting for it to finish, disable the save button and change its text to "Saving..."
  - after the save finishes, or if the cancel button is clicked, go back to the homepage
  - to programatically navigate to a route named `route-name` use `this.$router.push({ name: 'route-name'})`

- in `MovieItem`, wrap `<img>` in a `<router-link>`, too
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch23
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch22...ch23

## Challenge 24. Using a real REST API (++)

- get the API and run it locally:

```sh
# run in terminal
cd your_work_folder
git clone https://github.com/lbogdan/vue-intro-workshop-api.git
cd vue-intro-workshop-api
yarn
yarn start
# Initializing database
# Movies API server is running on port 8000...
```

- create a new file `src/api-rest/index.js` with the contents from https://github.com/lbogdan/vue-intro-workshop/blob/master/src/api-rest/index.js
- install `axios` package, used by the API client to make HTTP requests:

```sh
# run in terminal
yarn add --dev axios
```

- change all occurences of `@/api` to `@/api-rest`
- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch24
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch23...ch24

## Challenge 25. Using a data store: vuex (+++++)

- install `vuex` package

```sh
# run in terminal
yarn add --dev vuex
```

- create a new file `src/store/index.js` with the following contents:

```js
// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    isLoading: false,
  },
  getters: {},
  mutations: {},
  actions: {},
});
```

- in `main.js`, import and use the store

```js
// main.js
...
import store from './store'

new Vue({
  ...,
  store
})
```

- in the store, define:
  - `movies` and `isLoading` getters

```js
// store/index.js
getters: {
  movies: state => state.movies,
  ...
}
```

- `updateMovies` and `updateLoading` mutations to update the state

```js
// store/index.js
mutations: {
  updateMovies: (state, payload) => state.movies = payload,
  ...
}
```

- a `loadMovies` action to load the movie list from the API; it should apply the `updateLoading` and `updateMovies` mutations accordingly and should return a promise

```js
// store/index.js
actions: {
  loadMovies({ commit }) {
      commit('updateLoading', true);
      return getMovies().then(movies => {
        commit('updateMovies', movies);
        commit('updateLoading', false);
      });
    },
}
```

- refactor `MovieList.vue` to use the store instead of local state
  - in `created()`, dispatch the `loadMovies` action

```js
// in MovieList.vue
export default {
  ...
  created() {
    this.$store.dispatch('loadMovies');
  }
};
```

- replace `movies` and `isLoading` state with computeds that return the store getters with the same name

```js
// in MovieList.vue
export default {
  ...
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    ...
  }
}
```

- solution: https://github.com/lbogdan/vue-intro-workshop/tree/ch25
- diff: https://github.com/lbogdan/vue-intro-workshop/compare/ch24...ch25

  <!--
    - an `updateMovie` mutation to update a movie in the state
    - a `saveMovie` action to save the movie to the API; it should apply the `updateMovie` mutation if the API request is successful
  -->
