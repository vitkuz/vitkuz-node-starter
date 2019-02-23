const express = require('express');
const debug = require('debug')('app:movies.page.route');

const router = express.Router();
const builder = require('../../builders/movie/movies.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/movies.page.pug', pageModel);
  });
}

module.exports = createRouter;
