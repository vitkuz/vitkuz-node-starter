const express = require('express');
const debug = require('debug')('app:books.page.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/books.page.pug', pageModel);
  });
}

module.exports = createRouter;
