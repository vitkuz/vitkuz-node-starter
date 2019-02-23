const setupArticlesRoutes = require('./article/setupArticlesRoutses');
const setupBooksRoutses = require('./book/setupBooksRoutses');
const setupChannelsRoutes = require('./channel/setupChannelsRoutes');
const setupCoursesRoutes = require('./course/setupCoursesRoutes');
const setupEventsRoutes = require('./event/setupEventsRoutes');
const setupFilesRoutes = require('./file/setupFilesRoutes');
const setupIdeasRoutes = require('./idea/setupIdeasRoutes');
const setupInfographicsRoutes = require('./infographic/setupInfographicsRoutes');
const setupMoviesRoutes = require('./movie/setupMoviesRoutes');
const setupProductsRoutes = require('./product/setupProductsRoutes');
const setupQuotesRoutes = require('./quote/setupQuotesRoutes');
const setupStoriesRoutes = require('./story/setupStoriesRoutes');
const setupSummariesRoutes = require('./summary/setupSummariesRoutes');
const setupToolsRoutes = require('./tool/setupToolsRoutes');
const setupVideosRoutes = require('./video/setupVideosRoutes');

const setupUserRoutes = require('./user/setupUserRoutes');

const setupRoutes = (app) => {
  setupArticlesRoutes(app);
  setupBooksRoutses(app);
  setupChannelsRoutes(app);
  setupCoursesRoutes(app);
  setupEventsRoutes(app);
  setupFilesRoutes(app);
  setupIdeasRoutes(app);
  setupInfographicsRoutes(app);
  setupMoviesRoutes(app);
  setupProductsRoutes(app);
  setupQuotesRoutes(app);
  setupStoriesRoutes(app);
  setupSummariesRoutes(app);
  setupToolsRoutes(app);
  setupVideosRoutes(app);

  setupUserRoutes(app);
};

module.exports = setupRoutes;
