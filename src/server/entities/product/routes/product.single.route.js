const express = require('express');
const debug = require('debug')('app:products.single.route');

const router = express.Router();
const builder = require('../builders/product.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      res.render('product.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
