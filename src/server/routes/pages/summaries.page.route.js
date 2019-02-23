const express = require('express');
const debug = require('debug')('app:summaries.page.route');

const router = express.Router();
const builder = require('../../builders/summary/summaries.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/summaries.page.pug', pageModel);
  });
}

module.exports = createRouter;
