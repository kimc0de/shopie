const express = require('express');
const app = express();
const morgan = require('morgan'); // log api requests
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

//Routes
const productsRouter = require('./routers/productsRouter');
const categoriesRouter = require('./routers/categoriesRouter');
const usersRouter = require('./routers/usersRouter');
const ordersRouter = require('./routers/ordersRouter');

require('dotenv/config');

const api = process.env.API_URL;

// Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
app.use(authJwt());
app.use(errorHandler);
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

// Routers
app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'shopieDB'
})
  .then(() => {
    console.log('Database connection is ready');
  })
  .catch((error) => {
    console.log(error);
  })

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})
