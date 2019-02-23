const quoteEditRoute = require('./routes/quote.edit.route');
const quoteAddRoute = require('./routes/quote.add.route');
const quoteSingleRoute = require('./routes/quote.single.route');
const quotesPageRoute = require('./routes/quotes.page.route');

const setupRoutes = (app) => {
  app.use('/quotes', quotesPageRoute());
  app.use('/quotes/:quoteId', quoteSingleRoute());
  app.use('/user/add/quote', quoteAddRoute());
  app.use('/user/edit/quote/:quoteId', quoteEditRoute());
};

module.exports = setupRoutes;
