const eventEditRoute = require('./routes/event.edit.route');
const eventAddRoute = require('./routes/event.add.route');
const eventsSingleRoute = require('./routes/event.single.route');
const eventsPageRoute = require('./routes/events.page.route');

const setupRoutes = (app) => {
  app.use('/events', eventsPageRoute());
  app.use('/events/:eventId', eventsSingleRoute());
  app.use('/user/add/event', eventAddRoute());
  app.use('/user/edit/event/:eventId', eventEditRoute());
};

module.exports = setupRoutes;
