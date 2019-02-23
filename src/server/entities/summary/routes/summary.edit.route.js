const express = require('express');
const debug = require('debug')('app:summary.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('edit/summary.edit.pug', pageModel);
  });
}

module.exports = createRouter;
