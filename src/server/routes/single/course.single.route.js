const express = require('express');
const debug = require('debug')('app:courses.single.route');

const router = express.Router();
const builder = require('../../builders/course.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    try {
      const pageModel = await builder();
      res.render('single/courses.single.pug', pageModel);
    } catch (e) {
      debug(e);
    }
  });
}

module.exports = createRouter;
