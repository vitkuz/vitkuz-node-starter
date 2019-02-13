const express = require('express');
const debug = require('debug')('app:ideas.page.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('pages/ideas.page.pug', pageModel);
  });
}

module.exports = createRouter;
