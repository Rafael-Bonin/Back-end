const bodyParser = require('body-parser');
const express = require('express');
const authorsRouter = require('./router/authors');

const app = express();
app.use(bodyParser.json());
app.use(authorsRouter);

app.listen(3000, () => {
  console.log('Online');
});