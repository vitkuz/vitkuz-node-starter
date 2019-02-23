const express = require('express');
const debug = require('debug')('app:user.activation.route');

const router = express.Router();
const pageModel = {
  title: 'Activation',
};

function createRouter() {
  return router.get('/', (req, res) => {
    res.render('user/activation', pageModel);
  });
}

module.exports = createRouter;
