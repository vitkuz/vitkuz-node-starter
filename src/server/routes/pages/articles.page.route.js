const express = require('express');
const debug = require('debug')('app:articles.page.route');

const router = express.Router();
const builder = require('../../builders/article/articles.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/articles.page.pug', pageModel);
  });
}

module.exports = createRouter;
