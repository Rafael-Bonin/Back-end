const bodyParser = require('body-parser');
const express = require('express');
const booksRouter = require('./router/booksRouter');

const app = express();
app.use(bodyParser.json());
app.use(booksRouter);

app.listen(3000, () => {
  console.log('online');
});