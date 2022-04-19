const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `hello ${name}!` })
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `unauthorized` });
  }
  if (parseInt(age, 10) >= 18) {
  return res.status(200).json({ message: `hello, ${name}` });
  }
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})
