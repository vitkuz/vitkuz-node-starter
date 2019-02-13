const express = require('express');
const debug = require('debug')('app:summary.single.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('single/summary.single.pug', pageModel);
  });
}

module.exports = createRouter;
