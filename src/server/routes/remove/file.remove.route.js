const express = require('express');
const debug = require('debug')('app:file.remove.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('pages/file.add.pug', pageModel);
  });
}

module.exports = createRouter;
