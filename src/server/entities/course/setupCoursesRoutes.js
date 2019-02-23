const courseAddRoute = require('./routes/course.add.route');
const courseEditRoute = require('./routes/course.edit.route');
const courseSingleRoute = require('./routes/course.single.route');
const coursesPageRoute = require('./routes/courses.page.route');

const setupRoutes = (app) => {
  app.use('/courses', coursesPageRoute());
  app.use('/courses/:courseId', courseSingleRoute());
  app.use('/user/add/course', courseAddRoute());
  app.use('/user/edit/course/:courseId', courseEditRoute());
};

module.exports = setupRoutes;
