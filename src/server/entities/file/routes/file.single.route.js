const express = require('express');
const debug = require('debug')('app:files.single.route');

const router = express.Router();
const builder = require('../builders/file.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      debug(pageModel.content);
      res.render('file.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
