const express = require('express');
const debug = require('debug')('app:files.page.route');

const router = express.Router();
const builder = require('../../builders/files/files.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/files.page.pug', pageModel);
  });
}

module.exports = createRouter;
