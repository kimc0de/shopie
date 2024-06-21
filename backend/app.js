const express = require('express');
const app = express();
const morgan = require('morgan'); // log api requests
const mongoose = require('mongoose');

require('dotenv/config');

const api = process.env.API_URL;

app.use(express.json());
app.use(morgan('tiny'));

app.post(`${api}/products`, (req, res) => {
  const product = req.body;
  console.log(product);
  res.send(product);
});

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
