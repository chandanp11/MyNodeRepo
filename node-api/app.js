const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const { router } = require('./routes/post');

dotenv.config();

const app = express();
const port = process.env.PORT || 9091;
const mongo_uri = process.env.MONGO_URI;

// console.log(port);
// console.log(mongo_uri);

mongoose
  .connect(mongo_uri)
  .then(() => console.log('Connected to DB Successfully'));

mongoose.connection.on('error', (err) =>
  console.log(`DB Connection error: ${err.message}`)
);

const myOwnMiddleWare = (req, res, next) => {
  console.log('My own middleware applied');
  next();
};

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(myOwnMiddleWare);
app.use(expressValidator());
app.use(router);

app.listen(port, () => {
  console.log(`A Node JS API is listening on port: ${port}`);
});

// app.get('/', getPosts);
