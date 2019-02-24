const articlesPageRoute = require('./routes/articles.page.route');
const articleSingleRoute = require('./routes/article.single.route');
const articleEditRoute = require('./routes/article.edit.route');
const articleAddRoute = require('./routes/article.add.route');

const articleBooksSingleRoute = require('./routes/article.books.single.route');
const articleChannelsSingleRoute = require('./routes/article.channels.single.route');
const articleCoursesSingleRoute = require('./routes/article.courses.single.route');
const articleFilesSingleRoute = require('./routes/article.files.single.route');
const articleIdeasSingleRoute = require('./routes/article.ideas.single.route');
const articleInfographicsSingleRoute = require('./routes/article.infographics.single.route');
const articleMoviesSingleRoute = require('./routes/article.movies.single.route');
const articleQuotesSingleRoute = require('./routes/article.quotes.single.route');
const articleStoriesSingleRoute = require('./routes/article.stories.single.route');
const articleToolsSingleRoute = require('./routes/article.tools.single.route');
const articleVideosSingleRoute = require('./routes/article.videos.single.route');
const articleEventsSingleRoute = require('./routes/article.events.single.route');
const articleProductsSingleRoute = require('./routes/article.products.single.route');

const setupRoutes = (app) => {
  app.use('/articles', articlesPageRoute());
  app.use('/articles/:articleId', articleSingleRoute());

  app.use('/articles/:articleId/books', articleBooksSingleRoute());
  app.use('/articles/:articleId/channels', articleChannelsSingleRoute());
  app.use('/articles/:articleId/courses', articleCoursesSingleRoute());
  app.use('/articles/:articleId/files', articleFilesSingleRoute());
  app.use('/articles/:articleId/ideas', articleIdeasSingleRoute());
  app.use('/articles/:articleId/infographics', articleInfographicsSingleRoute());
  app.use('/articles/:articleId/movies', articleMoviesSingleRoute());
  app.use('/articles/:articleId/quotes', articleQuotesSingleRoute());
  app.use('/articles/:articleId/stories', articleStoriesSingleRoute());
  app.use('/articles/:articleId/tools', articleToolsSingleRoute());
  app.use('/articles/:articleId/videos', articleVideosSingleRoute());
  app.use('/articles/:articleId/events', articleEventsSingleRoute());
  app.use('/articles/:articleId/products', articleProductsSingleRoute());

  app.use('/user/add/article', articleAddRoute());
  app.use('/user/edit/article/:id', articleEditRoute());
};

module.exports = setupRoutes;
