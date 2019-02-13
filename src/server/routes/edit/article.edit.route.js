const express = require('express');
const debug = require('debug')('app:article.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('edit/article.edit.pug', pageModel);
  });
}

module.exports = createRouter;
