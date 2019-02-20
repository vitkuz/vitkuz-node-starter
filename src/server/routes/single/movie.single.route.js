const express = require('express');
const debug = require('debug')('app:movies.single.route');

const router = express.Router();
const builder = require('../../builders/movie.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      res.render('single/movies.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
