const express = require('express');
const debug = require('debug')('app:user.password.route');

const router = express.Router();
const pageModel = {
  title: 'Password',
};

function createRouter() {
  return router.get('/', (req, res) => {
    debug(req);
    res.render('user/password', pageModel);
  });
}

module.exports = createRouter;
