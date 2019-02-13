const express = require('express');
const debug = require('debug')('app:add.service.route');

const addService = require('../../services/add');

const router = express.Router();

function createRouter() {
  return router
    .put('/:entityType', (req, res, next) => {
      const { entityType } = req.params;
      const { body } = req.body;

      addService
        .add(entityType, body).then((result) => {
          console.log(result);
          res.status(200).json({ result });
        }).catch((e) => {
          debug(e);
          next(e);
        });
    });
}

module.exports = createRouter;
