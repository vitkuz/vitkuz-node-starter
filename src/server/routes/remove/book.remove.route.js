const express = require('express');
const debug = require('debug')('app:book.remove.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/book.add.pug', pageModel);
  });
}

module.exports = createRouter;
