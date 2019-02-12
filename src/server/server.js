/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const debug = require('debug')('app');
const morgan = require('morgan');

const pageModel = {
  page: {
    title: '',
    h1Title: '',
    description: '',
    url: '',
    redirect: '',
    type: '',
    template: '',
  },
};

dotenv.config();

const app = express();

// app.use(morgan('combined'));
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
  console.log('First middleware running');
  req.user = {
    id: 1,
    name: 'Vit',
  };
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware running');
  console.log(req.user);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'This is home page',
  });
});

app.get('/home', (req, res) => {
  const page = {
    title: 'Foo',
  };
  res.render('home', page);
});

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use((err, req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send('something wen\'t wrong');
  }
  return res.status(500).send(`hey!! we caugth the error 👍👍, ${err.stack} `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  debug(`Running on ${PORT}`);
});
