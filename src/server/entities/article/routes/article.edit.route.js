const express = require('express');
const debug = require('debug')('app:article.edit.route');

const router = express.Router();
const builder = require('../builders/article.books.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    debug(req);
    res.render('edit/article.edit.pug', pageModel);
  });
}

module.exports = createRouter;
