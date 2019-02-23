const express = require('express');
const debug = require('debug')('app:videos.page.route');

const router = express.Router();
const builder = require('../builders/videos.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('videos.page.pug', pageModel);
  });
}

module.exports = createRouter;
