const bookAddRoute = require('./routes/book.add.route');
const bookEditRoute = require('./routes/book.edit.route');
const bookSingleRoute = require('./routes/book.single.route');
const booksPageRoute = require('./routes/books.page.route');

const setupRoutes = (app) => {
  app.use('/books', booksPageRoute());
  app.use('/books/:bookId', bookSingleRoute());
  app.use('/user/add/book', bookAddRoute());
  app.use('/user/edit/book/:bookId', bookEditRoute());
};

module.exports = setupRoutes;
