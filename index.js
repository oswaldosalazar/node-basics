const express = require('express');
const crypto = require('crypto');
const app = express();
const { Worker, parentPort } = require('worker_threads');

app.get('/', (req, res, next) => {
  const worker = new Worker('./worker.js');
  worker.on('message', data => {
    res.send(data);
  });
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(3000, () => {
  console.log('App up at: 3000');
});
