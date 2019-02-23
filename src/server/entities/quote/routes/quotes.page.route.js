const express = require('express');
const debug = require('debug')('app:quotes.page.route');

const router = express.Router();
const builder = require('../builders/quotes.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('quotes.page.pug', pageModel);
  });
}

module.exports = createRouter;
