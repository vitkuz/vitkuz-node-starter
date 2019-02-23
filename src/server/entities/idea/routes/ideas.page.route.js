const express = require('express');
const debug = require('debug')('app:ideas.page.route');

const router = express.Router();
const builder = require('../builders/ideas.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    // debug(pageModel);
    debug(pageModel.content);
    res.render('ideas.page.pug', pageModel);
  });
}

module.exports = createRouter;
