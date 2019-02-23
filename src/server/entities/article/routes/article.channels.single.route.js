const express = require('express');
const debug = require('debug')('app:article.courses.single.route');

const router = express.Router();
const builder = require('../builders/article.channels.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      // debug(pageModel.content);
      res.render('article.channels.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
