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

const setupEntitiesRoutes = require('./entities/setupEntitiesRoutes');

const homeRoute = require('./routes/home.route');


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

const viewsPaths = [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'entities', 'article', 'views'),
  path.join(__dirname, 'entities', 'book', 'views'),
  path.join(__dirname, 'entities', 'channel', 'views'),
  path.join(__dirname, 'entities', 'course', 'views'),
  path.join(__dirname, 'entities', 'event', 'views'),
  path.join(__dirname, 'entities', 'file', 'views'),
  path.join(__dirname, 'entities', 'idea', 'views'),
  path.join(__dirname, 'entities', 'infographic', 'views'),
  path.join(__dirname, 'entities', 'movie', 'views'),
  path.join(__dirname, 'entities', 'product', 'views'),
  path.join(__dirname, 'entities', 'quote', 'views'),
  path.join(__dirname, 'entities', 'story', 'views'),
  path.join(__dirname, 'entities', 'summary', 'views'),
  path.join(__dirname, 'entities', 'tool', 'views'),
  path.join(__dirname, 'entities', 'video', 'views'),
];

app.set('views',viewsPaths);


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
setupEntitiesRoutes(app);


app.use('/', homeRoute());


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
