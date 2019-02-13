const express = require('express');
const debug = require('debug')('app:movie.add.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router
    .get('/', (req, res) => {
      debug(req);
      res.render('add/movie.add.pug', pageModel);
    });
}

module.exports = createRouter;
