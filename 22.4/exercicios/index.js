const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const message = { message: 'pong' };

app.get('/ping', (_req, res) => {
  res.json(message)
});

app.listen(3001, () => {
  console.log('listening on port 3001');
})