const express = require('express');
const debug = require('debug')('app:quotes.page.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/quotes.page.pug', pageModel);
  });
}

module.exports = createRouter;
