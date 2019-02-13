const express = require('express');
const debug = require('debug')('app:infographic.remove.route');

const router = express.Router();
const pageModel = {
  title: 'infographics page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/infographic.add.pug', pageModel);
  });
}

module.exports = createRouter;
