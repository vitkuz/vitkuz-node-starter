/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const debug = require('debug')('app:root');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const monitor = require('express-status-monitor');

// middlewares
const isUser = require('./middlewares/isUser.middleware');
const setLanguage = require('./middlewares/setLanguage.middleware');
const setLocalsDefaults = require('./middlewares/setLocalsDefaults.middleware');

const homeRoute = require('./routes/home.route');
const userLoginRoute = require('./routes/user/user.login.route');
const userRegisterRoute = require('./routes/user/user.register.route');
const userRoute = require('./routes/user/user.route');
const userActivationRoute = require('./routes/user/user.activation.route');
const userPasswordRoute = require('./routes/user/user.password.route');
const userEditRoute = require('./routes/user/user.edit.route');
const userProfileRoute = require('./routes/user/user.profile.route');

// pages routes
const articlesPageRoute = require('./routes/pages/articles.page.route');
const booksPageRoute = require('./routes/pages/books.page.route');
const channelsPageRoute = require('./routes/pages/channels.page.route');
const coursesPageRoute = require('./routes/pages/courses.page.route');
const eventsPageRoute = require('./routes/pages/events.page.route');
const filesPageRoute = require('./routes/pages/files.page.route');
const ideasPageRoute = require('./routes/pages/ideas.page.route');
const infographicsPageRoute = require('./routes/pages/infographics.page.route');
const moviesPageRoute = require('./routes/pages/movies.page.route');
const productsPageRoute = require('./routes/pages/products.page.route');
const quotesPageRoute = require('./routes/pages/quotes.page.route');
const storiesPageRoute = require('./routes/pages/stories.page.route');
const summariesPageRoute = require('./routes/pages/summaries.page.route');
const toolsPageRoute = require('./routes/pages/tools.page.route');
const videosPageRoute = require('./routes/pages/videos.page.route');

// single routes
const articleSingleRoute = require('./routes/single/article.single.route');
const bookSingleRoute = require('./routes/single/book.single.route');
const channelSingleRoute = require('./routes/single/channel.single.route');
const courseSingleRoute = require('./routes/single/course.single.route');
const eventsSingleRoute = require('./routes/single/event.single.route');
const fileSingleRoute = require('./routes/single/file.single.route');
const ideaSingleRoute = require('./routes/single/idea.single.route');
const infographicSingleRoute = require('./routes/single/infographic.single.route');
const movieSingleRoute = require('./routes/single/movie.single.route');
const productSingleRoute = require('./routes/single/product.single.route');
const quoteSingleRoute = require('./routes/single/quote.single.route');
const summarySingleRoute = require('./routes/single/story.single.route');
const storySingleRoute = require('./routes/single/summary.single.route');
const toolSingleRoute = require('./routes/single/tool.single.route');
const videoSingleRoute = require('./routes/single/video.single.route');

// add routes
const articleAddRoute = require('./routes/add/article.add.route');
const bookAddRoute = require('./routes/add/book.add.route');
const channelAddRoute = require('./routes/add/channel.add.route');
const courseAddRoute = require('./routes/add/course.add.route');
const eventAddRoute = require('./routes/add/event.add.route');
const fileAddRoute = require('./routes/add/file.add.route');
const ideaAddRoute = require('./routes/add/idea.add.route');
const infographicAddRoute = require('./routes/add/infographic.add.route');
const movieAddRoute = require('./routes/add/movie.add.route');
const productAddRoute = require('./routes/add/product.add.route');
const quoteAddRoute = require('./routes/add/quote.add.route');
const storyAddRoute = require('./routes/add/story.add.route');
const summaryAddRoute = require('./routes/add/summary.add.route');
const toolAddRoute = require('./routes/add/tool.add.route');
const videoAddRoute = require('./routes/add/video.add.route');

// edit routes
const articleEditRoute = require('./routes/edit/article.edit.route');
const bookEditRoute = require('./routes/edit/book.edit.route');
const channelEditRoute = require('./routes/edit/channel.edit.route');
const courseEditRoute = require('./routes/edit/course.edit.route');
const eventEditRoute = require('./routes/edit/event.edit.route');
const fileEditRoute = require('./routes/edit/file.edit.route');
const ideaEditRoute = require('./routes/edit/idea.edit.route');
const infographicEditRoute = require('./routes/edit/infographic.edit.route');
const movieEditRoute = require('./routes/edit/movie.edit.route');
const productEditRoute = require('./routes/edit/product.edit.route');
const quoteEditRoute = require('./routes/edit/quote.edit.route');
const storyEditRoute = require('./routes/edit/story.edit.route');
const summaryEditRoute = require('./routes/edit/summary.edit.route');
const toolEditRoute = require('./routes/edit/tool.edit.route');
const videoEditRoute = require('./routes/edit/video.edit.route');


const helpDevelopmentRoute = require('./routes/development/help.development.route');


const addServiceRoute = require('./routes/service/add.service.route');
const removeServiceRoute = require('./routes/service/remove.service.route');

// remove routes

const setupPassport = require('./config/passport');
const setupRoutes = require('./config/routes');

dotenv.config();

const app = express();

app.enable('trust proxy', 1);

if (process.env.NODE_ENV === 'development') {
  app.use(monitor());
}

app.use(helmet()); // protect express app

if (process.env.NODE_ENV === 'production') {
  app.use(compression({ level: 9 })); // compress responses
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  name: 'id',
  // store: new RedisStore(),
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false, // true downt work no https
    // maxAge: 60 * 60 * 24,
  },
}));

setupPassport(app);

// app.use(morgan('combined'));
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(setLanguage());
app.use(setLocalsDefaults(app));

app.use((req, res, next) => {
  console.log('First middleware running');
  next();
});

app.use((req, res, next) => {
  debug('Second middleware running');
  debug(req.user);

  const options = {
    httpOnly: true,
    maxAge: 1000,
  };

  res.cookie('test', 'testValue', options);
  res.cookie('test2', 'testValue2', options);

  next();
});

setupRoutes(app);

app.use('/', homeRoute());
app.use('/user', userRoute());
app.use('/user/login', userLoginRoute());
app.use('/user/register', userRegisterRoute());
app.use('/user/activation', userActivationRoute());
app.use('/user/password', userPasswordRoute());
app.use('/user/edit', userEditRoute());
app.use('/user/profile', isUser(), userProfileRoute());

// View Entities routes

app.use('/articles', articlesPageRoute());
app.use('/articles/:articleId', articleSingleRoute());

const articleBooksSingleRoute = require('./routes/single/article/books.article.single.route');
const articleChannelsSingleRoute = require('./routes/single/article/channels.article.single.route');
const articleCoursesSingleRoute = require('./routes/single/article/courses.article.single.route');
const articleFilesSingleRoute = require('./routes/single/article/files.article.single.route');
const articleInfographicsSingleRoute = require('./routes/single/article/infographics.article.single.route');
const articleMoviesSingleRoute = require('./routes/single/article/movies.article.single.route');
const articleQuotesSingleRoute = require('./routes/single/article/quotes.article.single.route');
const articleStoriesSingleRoute = require('./routes/single/article/storys.article.single.route');
const articleToolsSingleRoute = require('./routes/single/article/tools.article.single.route');
const articleVideosSingleRoute = require('./routes/single/article/videos.article.single.route');
const articleEventsSingleRoute = require('./routes/single/article/events.article.single.route');
const articleProductsSingleRoute = require('./routes/single/article/products.article.single.route');

app.use('/articles/:articleId/books', articleBooksSingleRoute());
app.use('/articles/:articleId/channels', articleChannelsSingleRoute());
app.use('/articles/:articleId/courses', articleCoursesSingleRoute());
app.use('/articles/:articleId/files', articleFilesSingleRoute());
app.use('/articles/:articleId/infographics', articleInfographicsSingleRoute());
app.use('/articles/:articleId/movies', articleMoviesSingleRoute());
app.use('/articles/:articleId/quotes', articleQuotesSingleRoute());
app.use('/articles/:articleId/stories', articleStoriesSingleRoute());
app.use('/articles/:articleId/tools', articleToolsSingleRoute());
app.use('/articles/:articleId/videos', articleVideosSingleRoute());
app.use('/articles/:articleId/events', articleEventsSingleRoute());
app.use('/articles/:articleId/products', articleProductsSingleRoute());

app.use('/user/add/article', articleAddRoute());
app.use('/user/edit/article/:articleId', articleEditRoute());

app.use('/books', booksPageRoute());
app.use('/books/:bookId', bookSingleRoute());
app.use('/user/add/book', bookAddRoute());
app.use('/user/edit/book/:bookId', bookEditRoute());

app.use('/channels', channelsPageRoute());
app.use('/channels/:channelId', channelSingleRoute());
app.use('/user/add/channel', channelAddRoute());
app.use('/user/edit/channel/:channelId', channelEditRoute());

app.use('/courses', coursesPageRoute());
app.use('/courses/:courseId', courseSingleRoute());
app.use('/user/add/course', courseAddRoute());
app.use('/user/edit/course/:courseId', courseEditRoute());

app.use('/events', eventsPageRoute());
app.use('/events/:eventId', eventsSingleRoute());
app.use('/user/add/event', eventAddRoute());
app.use('/user/edit/event/:eventId', eventEditRoute());

app.use('/files', filesPageRoute());
app.use('/files/:fileId', fileSingleRoute());
app.use('/user/add/file', fileAddRoute());
app.use('/user/edit/file/:fileId', fileEditRoute());

app.use('/ideas', ideasPageRoute());
app.use('/ideas/:ideaId', ideaSingleRoute());
app.use('/user/add/idea', ideaAddRoute());
app.use('/user/edit/idea/:ideaId', ideaEditRoute());

app.use('/infographics', infographicsPageRoute());
app.use('/infographics/:infographicId', infographicSingleRoute());
app.use('/user/add/infographic', infographicAddRoute());
app.use('/user/edit/infographic/:infographicId', infographicEditRoute());

app.use('/movies', moviesPageRoute());
app.use('/movies/:movieId', movieSingleRoute());
app.use('/user/add/movie', movieAddRoute());
app.use('/user/edit/movie/:movieId', movieEditRoute());

app.use('/products', productsPageRoute());
app.use('/products/:movieId', productSingleRoute());
app.use('/user/add/product', productAddRoute());
app.use('/user/edit/product/:productId', productEditRoute());

app.use('/quotes', quotesPageRoute());
app.use('/quotes/:quoteId', quoteSingleRoute());
app.use('/user/add/quote', quoteAddRoute());
app.use('/user/edit/quote/:quoteId', quoteEditRoute());

app.use('/stories', storiesPageRoute());
app.use('/stories/:storyId', storySingleRoute());
app.use('/user/add/story', storyAddRoute());
app.use('/user/edit/story/:storyId', storyEditRoute());

app.use('/summaries', summariesPageRoute());
app.use('/summaries/:storyId', summarySingleRoute());
app.use('/user/add/summary', summaryAddRoute());
app.use('/user/edit/summary/:summaryId', summaryEditRoute());

app.use('/tools', toolsPageRoute());
app.use('/tools/:toolId', toolSingleRoute());
app.use('/user/add/tool', toolAddRoute());
app.use('/user/edit/tool/:toolId', toolEditRoute());

app.use('/videos', videosPageRoute());
app.use('/videos/:videoId', videoSingleRoute());
app.use('/user/add/video', videoAddRoute());
app.use('/user/edit/video/:videoId', videoEditRoute());


app.use('/service/add', addServiceRoute());
app.use('/service/remove', removeServiceRoute());

// app.use('/user/add/channel', videoAddRoute());
// app.use('/user/add/course', videoAddRoute());

// app.use('/user/add/video', videoAddRoute());

// app.use('/articles', videosPageRoute());
// app.use('/events', videosPageRoute());
// app.use('/products', videosPageRoute());
// app.use('/cart', videosPageRoute());
// app.use('/cart/checkout', videosPageRoute());


app.get('/system/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/system/health', (req, res) => {
  res.json({
    date: new Date(),
    message: 'Website is healthy!',
  });
});

app.get('/system/cron', (req, res) => {
  res.json({
    date: new Date(),
    message: 'Implement cron',
  });
});

if (process.env.NODE_ENV === 'development') {
  app.use('/development', helpDevelopmentRoute());
}


app.use((err, req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send('something wen\'t wrong');
  }
  return res.status(500).send(`hey!! we caugth the error 👍👍, ${err.stack} `);
});


process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', (err) => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  debug(`Running on ${PORT}`);
});
