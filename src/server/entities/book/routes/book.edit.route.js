const express = require('express');
const debug = require('debug')('app:books.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('edit/book.edit.pug', pageModel);
  });
}

module.exports = createRouter;
