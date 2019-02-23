const toolEditRoute = require('./routes/tool.edit.route');
const toolAddRoute = require('./routes/tool.add.route');
const toolSingleRoute = require('./routes/tool.single.route');
const toolsPageRoute = require('./routes/tools.page.route');

const setupRoutes = (app) => {
  app.use('/tools', toolsPageRoute());
  app.use('/tools/:toolId', toolSingleRoute());
  app.use('/user/add/tool', toolAddRoute());
  app.use('/user/edit/tool/:toolId', toolEditRoute());
};

module.exports = setupRoutes;
