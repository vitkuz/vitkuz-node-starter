const express = require('express');
const debug = require('debug')('app:events.single.route');

const router = express.Router();
const builder = require('../builders/event.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      debug(pageModel.content);
      res.render('event.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
