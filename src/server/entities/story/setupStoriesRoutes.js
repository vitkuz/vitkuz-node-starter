const storyEditRoute = require('./routes/story.edit.route');
const storyAddRoute = require('./routes/story.add.route');
const storySingleRoute = require('./routes/story.single.route');
const storiesPageRoute = require('./routes/stories.page.route');

const setupRoutes = (app) => {
  app.use('/stories', storiesPageRoute());
  app.use('/stories/:storyId', storySingleRoute());
  app.use('/user/add/story', storyAddRoute());
  app.use('/user/edit/story/:storyId', storyEditRoute());
};

module.exports = setupRoutes;
