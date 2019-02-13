const express = require('express');
const debug = require('debug')('app:movies.single.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('single/movies.single.pug', pageModel);
  });
}

module.exports = createRouter;
