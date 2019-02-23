const express = require('express');
const debug = require('debug')('app:articles.page.route');

const router = express.Router();
const builder = require('../builders/articles.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      debug(pageModel.content);
      res.render('articles.page.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
