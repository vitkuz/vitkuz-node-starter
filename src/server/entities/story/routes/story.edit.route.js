const express = require('express');
const debug = require('debug')('app:stories.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('edit/story.edit.pug', pageModel);
  });
}

module.exports = createRouter;
