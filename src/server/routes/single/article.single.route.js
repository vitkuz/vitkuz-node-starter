const express = require('express');
const debug = require('debug')('app:articles.single.route');

const router = express.Router();
const builder = require('../../builders/article.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('single/articles.single.pug', pageModel);
  });
}

module.exports = createRouter;
