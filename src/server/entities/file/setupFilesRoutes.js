const fileEditRoute = require('./routes/file.edit.route');
const fileAddRoute = require('./routes/file.add.route');
const fileSingleRoute = require('./routes/file.single.route');
const filesPageRoute = require('./routes/files.page.route');

const setupRoutes = (app) => {
  app.use('/files', filesPageRoute());
  app.use('/files/:fileId', fileSingleRoute());
  app.use('/user/add/file', fileAddRoute());
  app.use('/user/edit/file/:fileId', fileEditRoute());
};

module.exports = setupRoutes;
