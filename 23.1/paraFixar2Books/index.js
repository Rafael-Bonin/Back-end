const bodyParser = require('body-parser');
const express = require('express');
const booksRouter = require('./router/booksRouter');
const authorsRouter = require('./router/authors');

const app = express();
app.use(bodyParser.json());
app.use(booksRouter);
app.use(authorsRouter);

app.listen(3000, () => {
  console.log('online');
});