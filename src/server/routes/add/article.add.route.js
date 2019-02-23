const express = require('express');
const debug = require('debug')('app:article.add.route');

const router = express.Router();
const builder = require('../../builders/article/article.page.builder');

function createRouter() {
  return router.get('/', async (req, res) => {
    const pageModel = await builder();
    console.log(pageModel);
    res.render('add/article.add.pug', pageModel);
  });
}

module.exports = createRouter;
