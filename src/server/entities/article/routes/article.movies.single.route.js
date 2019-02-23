const express = require('express');
const debug = require('debug')('app:article.movies.single.route');

const router = express.Router();
const builder = require('../builders/article.movies.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      // debug(pageModel.content);
      res.render('article.movies.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
