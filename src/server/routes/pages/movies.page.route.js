const express = require('express');
const debug = require('debug')('app:movies.page.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/movies.page.pug', pageModel);
  });
}

module.exports = createRouter;
