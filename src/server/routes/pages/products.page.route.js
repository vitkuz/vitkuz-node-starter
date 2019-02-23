const express = require('express');
const debug = require('debug')('app:product.page.route');

const router = express.Router();
const builder = require('../../builders/product/products.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/product.page.pug', pageModel);
  });
}

module.exports = createRouter;
