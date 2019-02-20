const express = require('express');
const debug = require('debug')('app:quotes.single.route');

const router = express.Router();
const builder = require('../../builders/quote.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      res.render('single/quotes.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
