const axios = require('axios');
const debug = require('debug')('app:movies.service');

function login() {
  return new Promise((resolve, reject) => {
    if (process.env.USE_MOCKS) {
      mockDB.fetch('books', 10).then(result => resolve(result));
    } else {
      axios.get().then(() => {
        resolve('result');
      }).catch((e) => {
        debug(e);
        reject(e);
      });
    }
  });
}

module.exports = {
  login
};
