const express = require('express');
const debug = require('debug')('app:product.add.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('add/product.add.pug', pageModel);
  });
}

module.exports = createRouter;
