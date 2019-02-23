const express = require('express');
const debug = require('debug')('app:category.base.page.route');

const router = express.Router();
const builder = require('../../builders/category/categories.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/category.base.page.pug', pageModel);
  });
}

module.exports = createRouter;
