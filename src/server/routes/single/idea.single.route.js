const express = require('express');
const debug = require('debug')('app:ideas.single.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('single/ideas.single.pug', pageModel);
  });
}

module.exports = createRouter;
