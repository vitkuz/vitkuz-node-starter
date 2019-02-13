const express = require('express');
const debug = require('debug')('app:courses.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('edit/course.edit.pug', pageModel);
  });
}

module.exports = createRouter;
