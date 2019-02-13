const express = require('express');
const debug = require('debug')('app:files.page.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('pages/files.page.pug', pageModel);
  });
}

module.exports = createRouter;
