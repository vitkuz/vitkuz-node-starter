const express = require('express');
const debug = require('debug')('app:movies.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router
    .get('/', (req, res) => {
      debug(req);
      res.render('edit/movie.edit.pug', pageModel);
    });
}

module.exports = createRouter;
