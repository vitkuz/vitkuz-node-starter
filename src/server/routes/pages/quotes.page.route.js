const express = require('express');
const debug = require('debug')('app:quotes.page.route');

const router = express.Router();
const builder = require('../../builders/quote/quotes.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/quotes.page.pug', pageModel);
  });
}

module.exports = createRouter;
