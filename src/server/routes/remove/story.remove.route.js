const express = require('express');
const debug = require('debug')('app:story.remove.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/story.add.pug', pageModel);
  });
}

module.exports = createRouter;