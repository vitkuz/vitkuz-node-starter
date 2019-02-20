const express = require('express');
const debug = require('debug')('app:files.single.route');

const router = express.Router();
const builder = require('../../builders/file.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      res.render('single/files.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
