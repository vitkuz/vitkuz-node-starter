const express = require('express');
const debug = require('debug')('app:summary.add.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('add/summary.add.pug', pageModel);
  });
}

module.exports = createRouter;
