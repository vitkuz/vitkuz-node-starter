const infographicEditRoute = require('./routes/infographic.edit.route');
const infographicAddRoute = require('./routes/infographic.add.route');
const infographicSingleRoute = require('./routes/infographic.single.route');
const infographicsPageRoute = require('./routes/infographics.page.route');

const setupRoutes = (app) => {
  app.use('/infographics', infographicsPageRoute());
  app.use('/infographics/:infographicId', infographicSingleRoute());
  app.use('/user/add/infographic', infographicAddRoute());
  app.use('/user/edit/infographic/:infographicId', infographicEditRoute());
};

module.exports = setupRoutes;
