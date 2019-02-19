const express = require('express');
const debug = require('debug')('app:infographics.single.route');

const router = express.Router();
const pageModel = {
  title: 'infographics page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('single/infographics.single.pug', pageModel);
  });
}

module.exports = createRouter;
