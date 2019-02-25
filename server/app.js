const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/content.db');

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'))

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/api/overview/:item_id/', function (req, res) {
  var {item_id} = req.params;
  db.all('SELECT * FROM item WHERE item_id=?', item_id, function(err, data) {
    if (err) {
      console.log(err);
    }
    res.send(data);
  })
})

app.get('/api/specs/:item_id/', function (req, res) {
  var {item_id} = req.params;
  db.all('SELECT * FROM specs WHERE item_id=?', item_id, function(err, data) {
    if (err) {
      console.log(err);
    }
    res.send(data);
  })
})

app.get('*', (req, res) => {
  //send a response that includes html
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = app;