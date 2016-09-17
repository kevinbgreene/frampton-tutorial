/* jshint esversion: 6 */

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./src'));
app.use(express.static('./node_modules'));

app.post('/api/submit', (req, res) => {
  res.send('Ok');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
