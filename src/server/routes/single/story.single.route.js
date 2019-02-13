const express = require('express');
const debug = require('debug')('app:stories.single.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('single/stories.single.pug', pageModel);
  });
}

module.exports = createRouter;
