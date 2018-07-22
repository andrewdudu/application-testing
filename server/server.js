const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page Not Found!'
  });
})

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Andrew',
    age: 19
  }, {
    name: 'Wijaya',
    age: 20
  }])
})

app.listen(3001);

module.exports.app = app;
