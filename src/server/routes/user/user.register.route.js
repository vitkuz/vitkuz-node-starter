const express = require('express');
const debug = require('debug')('app:user.register.route');

const router = express.Router();
const pageModel = {
  title: 'Register',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('user/register', pageModel);
  });
}

module.exports = createRouter;
