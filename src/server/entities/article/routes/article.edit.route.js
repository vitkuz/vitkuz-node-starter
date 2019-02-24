const express = require('express');
const debug = require('debug')('app:article.edit.route');

const router = express.Router();
const builder = require('../builders/article.edit.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      debug(pageModel.content);
      res.render('article.edit.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
