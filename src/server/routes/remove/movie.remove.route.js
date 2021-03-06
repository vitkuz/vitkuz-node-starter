const express = require('express');
const debug = require('debug')('app:movie.remove.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/movie.add.pug', pageModel);
  });
}

module.exports = createRouter;
