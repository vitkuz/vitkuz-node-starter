const express = require('express');
const debug = require('debug')('app:user.route');

const router = express.Router();
const pageModel = {
  title: 'User',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('user/user', pageModel);
  });
}

module.exports = createRouter;
