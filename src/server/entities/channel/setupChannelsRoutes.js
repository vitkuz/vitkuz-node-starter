const channelAddRoute = require('./routes/channel.add.route');
const channelEditRoute = require('./routes/channel.edit.route');
const channelSingleRoute = require('./routes/channel.single.route');
const channelsPageRoute = require('./routes/channels.page.route');

const setupRoutes = (app) => {
  app.use('/channels', channelsPageRoute());
  app.use('/channels/:channelId', channelSingleRoute());
  app.use('/user/add/channel', channelAddRoute());
  app.use('/user/edit/channel/:channelId', channelEditRoute());
};

module.exports = setupRoutes;
