const express = require('express');
const debug = require('debug')('app:help.development.route');

const router = express.Router();
const pageModel = {
  title: 'Development',
};

function createRouter() {
  return router
    .get('/help', (req, res) => {
      res.render('development/help.development.pug', pageModel);
    })
    .get('/kill', (req, res) => {
      process.exit(1);
    });
}

module.exports = createRouter;
