const axios = require('axios');
const debug = require('debug')('app:books.service');

const mockDB = require('../mocks/mock');

function add(entityType, body) {
  return new Promise((resolve, reject) => {
    if (process.env.USE_MOCKS) {
      mockDB.add(entityType, body).then(result => resolve(result));
    } else {
      axios.put().then(() => {
        resolve('result');
      }).catch((e) => {
        debug(e);
        reject(e);
      });
    }
  });
}

module.exports = {
  add,
};
