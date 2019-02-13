const express = require('express');
const debug = require('debug')('app:tools.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('edit/tool.edit.pug', pageModel);
  });
}

module.exports = createRouter;
