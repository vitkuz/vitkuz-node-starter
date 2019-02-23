const userLoginRoute = require('./routes/user.login.route');
const userRegisterRoute = require('./routes/user.register.route');
const userRoute = require('./routes/user.route');
const userActivationRoute = require('./routes/user.activation.route');
const userPasswordRoute = require('./routes/user.password.route');
const userEditRoute = require('./routes/user.edit.route');
const userProfileRoute = require('./routes/user.profile.route');

const setupRoutes = (app) => {
  app.use('/user', userRoute());
  app.use('/user/login', userLoginRoute());
  app.use('/user/register', userRegisterRoute());
  app.use('/user/activation', userActivationRoute());
  app.use('/user/password', userPasswordRoute());
  app.use('/user/edit', userEditRoute());
  app.use('/user/profile', userProfileRoute());
};

module.exports = setupRoutes;
