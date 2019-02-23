const express = require('express');
const debug = require('debug')('app:tools.page.route');

const router = express.Router();
const builder = require('../builders/tools.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('tools.page.pug', pageModel);
  });
}

module.exports = createRouter;
