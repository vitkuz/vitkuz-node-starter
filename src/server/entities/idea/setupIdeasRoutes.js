const ideaEditRoute = require('./routes/idea.edit.route');
const ideaAddRoute = require('./routes/idea.add.route');
const ideaSingleRoute = require('./routes/idea.single.route');
const ideasPageRoute = require('./routes/ideas.page.route');

const setupRoutes = (app) => {
  app.use('/ideas', ideasPageRoute());
  app.use('/ideas/:ideaId', ideaSingleRoute());
  app.use('/user/add/idea', ideaAddRoute());
  app.use('/user/edit/idea/:ideaId', ideaEditRoute());
};

module.exports = setupRoutes;
