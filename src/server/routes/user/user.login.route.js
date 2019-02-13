const express = require('express');
const debug = require('debug')('app:user.login.route');

const router = express.Router();
const pageModel = {
  title: 'Login',
};

function createRouter() {
  router.get('/', (req, res) => {
    res.render('user/login', pageModel);
  });

  router.post('/', (req, res) => {
    req.login(req.body, () => {
      debug('success');
      res.redirect('/user/profile');
    });
  });

  return router;
}

module.exports = createRouter;
