const express = require('express');
const debug = require('debug')('app:config.routes');

const router = express.Router();

const { urls } = require('../data/categoriesMenu');

const overrides = {
  '/politics-society': () => router.get('/', (req, res) => {
    res.render('pages/category.base.page.pug', {});
  }),
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('pages/category.base.page.pug', {});
  });
}

function setupRoutes(app) {
  urls.forEach((slug) => {
    debug(slug);
    if (!overrides[slug]) {
      app.use(slug, createRouter());
    } else {
      debug(`*Path for ${slug} was overridden`);
      app.use(slug, overrides[slug]());
    }
  });
}

module.exports = setupRoutes;
