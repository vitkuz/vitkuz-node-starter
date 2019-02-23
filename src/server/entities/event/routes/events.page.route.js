const express = require('express');
const debug = require('debug')('app:events.page.route');

const router = express.Router();
const builder = require('../builders/events.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('events.page.pug', pageModel);
  });
}

module.exports = createRouter;
