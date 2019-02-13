const express = require('express');
const debug = require('debug')('app:infographics.page.route');

const router = express.Router();
const pageModel = {
  title: 'infographics page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/infographics.page.pug', pageModel);
  });
}

module.exports = createRouter;
