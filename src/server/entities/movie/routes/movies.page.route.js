const express = require('express');
const debug = require('debug')('app:movies.page.route');

const router = express.Router();
const builder = require('../builders/movies.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('movies.page.pug', pageModel);
  });
}

module.exports = createRouter;
