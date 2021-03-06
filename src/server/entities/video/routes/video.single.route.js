const express = require('express');
const debug = require('debug')('app:videos.single.route');

const router = express.Router();
const builder = require('../builders/video.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      res.render('video.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
