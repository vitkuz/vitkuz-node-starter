const express = require('express');
const debug = require('debug')('app:files.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('edit/file.edit.pug', pageModel);
  });
}

module.exports = createRouter;
