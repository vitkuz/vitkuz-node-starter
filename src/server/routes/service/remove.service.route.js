const express = require('express');
const debug = require('debug')('app:remove.service.route');

const removeService = require('../../services/remove.service');

const router = express.Router();

function createRouter() {
  return router
    .delete('/:entityType/:entityId', (req, res, next) => {
      const { entityType, entityId } = req.params;

      removeService
        .remove(entityType, entityId).then((result) => {
          console.log(result);
          res.status(200).json({ result });
        }).catch((e) => {
          debug(e);
          next(e);
        });
    });
}

module.exports = createRouter;
