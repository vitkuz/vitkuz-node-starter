const movieAddRoute = require('./routes/movie.add.route');
const movieSingleRoute = require('./routes/movie.single.route');
const moviesPageRoute = require('./routes/movies.page.route');
const movieEditRoute = require('./routes/movie.edit.route');

const setupRoutes = (app) => {
  app.use('/movies', moviesPageRoute());
  app.use('/movies/:movieId', movieSingleRoute());
  app.use('/user/add/movie', movieAddRoute());
  app.use('/user/edit/movie/:movieId', movieEditRoute());
};

module.exports = setupRoutes;
