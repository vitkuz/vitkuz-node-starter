const express = require('express');
const debug = require('debug')('app:books.page.route');

const router = express.Router();
const builder = require('../builders/books.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      debug(pageModel);
      res.render('books.page.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
