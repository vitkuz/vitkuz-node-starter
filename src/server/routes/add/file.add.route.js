const express = require('express');
const debug = require('debug')('app:file.add.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('add/file.add.pug', pageModel);
  });
}

module.exports = createRouter;
