const express = require('express');
const debug = require('debug')('app:infographics.single.route');

const router = express.Router();
const builder = require('../builders/infographic.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      // debug(pageModel);
      // debug(pageModel.content);
      res.render('infographic.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
