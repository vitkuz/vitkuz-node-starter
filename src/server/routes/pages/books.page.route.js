const express = require('express');
const debug = require('debug')('app:books.page.route');

const router = express.Router();
const builder = require('../../builders/book/books.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/books.page.pug', pageModel);
  });
}

module.exports = createRouter;
