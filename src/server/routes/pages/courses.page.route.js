const express = require('express');
const debug = require('debug')('app:courses.page.route');

const router = express.Router();
const builder = require('../../builders/course/courses.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    debug(pageModel);
    res.render('pages/courses.page.pug', pageModel);
  });
}

module.exports = createRouter;
