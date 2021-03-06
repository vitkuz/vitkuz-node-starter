const express = require('express');
const debug = require('debug')('app:channels.page.route');

const router = express.Router();
const builder = require('../builders/channels.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('channels.page.pug', pageModel);
  });
}

module.exports = createRouter;
