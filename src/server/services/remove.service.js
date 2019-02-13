const axios = require('axios');
const debug = require('debug')('app:books.service');

const mockDB = require('../mocks/mock');

function remove(entityType, entityId) {
  return new Promise((resolve, reject) => {
    if (process.env.USE_MOCKS) {
      mockDB.remove(entityType, entityId).then(result => resolve(result));
    } else {
      axios.delete().then(() => {
        resolve('result');
      }).catch((e) => {
        debug(e);
        reject(e);
      });
    }
  });
}

module.exports = {
  remove,
};
