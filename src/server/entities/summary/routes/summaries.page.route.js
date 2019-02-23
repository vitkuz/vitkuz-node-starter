const express = require('express');
const debug = require('debug')('app:summaries.page.route');

const router = express.Router();
const builder = require('../builders/summaries.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      // debug(pageModel.content);
      res.render('summaries.page.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
