const videoEditRoute = require('./routes/video.edit.route');
const videoAddRoute = require('./routes/video.add.route');
const videoSingleRoute = require('./routes/video.single.route');
const videosPageRoute = require('./routes/videos.page.route');

const setupRoutes = (app) => {
  app.use('/videos', videosPageRoute());
  app.use('/videos/:videoId', videoSingleRoute());
  app.use('/user/add/video', videoAddRoute());
  app.use('/user/edit/video/:videoId', videoEditRoute());
};

module.exports = setupRoutes;
