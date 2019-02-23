const summaryEditRoute = require('./routes/summary.edit.route');
const summaryAddRoute = require('./routes/summary.add.route');
const summarySingleRoute = require('./routes/summary.single.route');
const summariesPageRoute = require('./routes/summaries.page.route');

const setupRoutes = (app) => {
  app.use('/summaries', summariesPageRoute());
  app.use('/summaries/:storyId', summarySingleRoute());
  app.use('/user/add/summary', summaryAddRoute());
  app.use('/user/edit/summary/:summaryId', summaryEditRoute());
};

module.exports = setupRoutes;
