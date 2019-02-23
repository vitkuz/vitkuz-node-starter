const express = require('express');
const debug = require('debug')('app:infographics.page.route');

const router = express.Router();
const builder = require('../builders/infographics.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('infographics.page.pug', pageModel);
  });
}

module.exports = createRouter;
