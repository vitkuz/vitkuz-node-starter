const express = require('express');
const debug = require('debug')('app:infographics.edit.route');

const router = express.Router();
const pageModel = {
  title: 'infographics page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('edit/infographic.edit.pug', pageModel);
  });
}

module.exports = createRouter;
