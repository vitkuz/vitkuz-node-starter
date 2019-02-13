const express = require('express');
const debug = require('debug')('app:home');

const router = express.Router();
const pageModel = {
  title: 'Home',
};

function createRouter() {
    return router.get('/', (req, res) => {
        // debug(req);
        res.render('home', pageModel);
    });
}

module.exports = createRouter;
