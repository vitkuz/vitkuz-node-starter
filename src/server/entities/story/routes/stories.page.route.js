const express = require('express');
const debug = require('debug')('app:stories.page.route');

const router = express.Router();
const builder = require('../builders/stories.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('stories.page.pug', pageModel);
  });
}

module.exports = createRouter;
