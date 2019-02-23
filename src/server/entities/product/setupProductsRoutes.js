const productEditRoute = require('./routes/product.edit.route');
const productAddRoute = require('./routes/product.add.route');
const productSingleRoute = require('./routes/product.single.route');
const productsPageRoute = require('./routes/products.page.route');

const setupRoutes = (app) => {
  app.use('/products', productsPageRoute());
  app.use('/products/:movieId', productSingleRoute());
  app.use('/user/add/product', productAddRoute());
  app.use('/user/edit/product/:productId', productEditRoute());
};

module.exports = setupRoutes;
