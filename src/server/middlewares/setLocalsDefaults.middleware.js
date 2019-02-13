const entitiesMenu = require('../data/entitiesMenu');
const userCreateEntitiesMenu = require('../data/userCreateEntitiesMenu');
const devSingleEntitiesMenu = require('../data/devSingleEntitiesMenu');
const devEditEntitiesMenu = require('../data/devEditEntitiesMenu');
const { categoriesMenu } = require('../data/categoriesMenu');

function setLocalsDefaults(app) {
  return function (req, res, next) {
    app.locals.date = {};
    app.locals.date.now = Date.now();

    if (req.user) {
      app.locals.user = req.user;
    }

    app.locals.entitiesMenu = entitiesMenu;
    app.locals.userCreateEntitiesMenu = userCreateEntitiesMenu;
    app.locals.devSingleEntitiesMenu = devSingleEntitiesMenu;
    app.locals.devEditEntitiesMenu = devEditEntitiesMenu;
    app.locals.categoriesMenu = categoriesMenu;

    next();
  };
}

module.exports = setLocalsDefaults;
