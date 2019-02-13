const express = require('express');
const debug = require('debug')('app:channels.page.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};
function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/channels.page.pug', pageModel);
  });
}

module.exports = createRouter;
