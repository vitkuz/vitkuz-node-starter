const express = require('express');
const debug = require('debug')('app:user.edit.route');

const router = express.Router();
const pageModel = {
  title: 'Edit',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('user/edit', pageModel);
  });
}

module.exports = createRouter;
