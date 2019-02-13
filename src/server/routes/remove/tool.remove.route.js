const express = require('express');
const debug = require('debug')('app:tool.remove.route');

const router = express.Router();
const pageModel = {
  title: 'Books page',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('pages/tool.add.pug', pageModel);
  });
}

module.exports = createRouter;
