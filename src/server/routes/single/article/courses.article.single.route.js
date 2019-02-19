const express = require('express');
const debug = require('debug')('app:courses.single.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('single/courses.single.pug', pageModel);
  });
}

module.exports = createRouter;
