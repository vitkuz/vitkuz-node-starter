const express = require('express');
const debug = require('debug')('app:user.profile.route');

const router = express.Router();
const pageModel = {
  title: 'Profile',
};

function createRouter() {
  router.get('/', (req, res) => {
    res.render('user/profile', pageModel);
  });

  return router;
}

module.exports = createRouter;
