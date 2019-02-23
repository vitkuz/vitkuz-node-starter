const express = require('express');
const debug = require('debug')('app:video.add.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('add/video.add.pug', pageModel);
  });
}

module.exports = createRouter;
