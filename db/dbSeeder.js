const faker = require('faker');
const {imagePush, generateRandomNumber} = require('./dataHelpers.js');
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./content.db');

db.run(`CREATE TABLE item (item_id INTEGER PRIMARY KEY AUTOINCREMENT, product_type VARCHAR, item_name VARCHAR, price FLOAT, isMassdropMade BOOLEAN, blurb1 VARCHAR, blurb2 VARCHAR, blurb3 VARCHAR)`);
db.run('CREATE TABLE specs (item_id INTEGER, specs_id INTEGER PRIMARY KEY AUTOINCREMENT, renderSpecAmt INTEGER, renderIncludeAmt INTEGER, spec1 VARCHAR, spec2 VARCHAR, spec3 VARCHAR, spec4 VARCHAR, spec5 VARCHAR, spec6 VARCHAR, spec7 VARCHAR, spec8 VARCHAR, spec9 VARCHAR, spec10 VARCHAR, spec11 VARCHAR, spec12 VARCHAR, include1 VARCHAR, include2 VARCHAR, include3 VARCHAR, include4 VARCHAR, include5 VARCHAR, FOREIGN KEY (item_id) REFERENCES item(item_id))')

db.serialize(function() {
  
  for (var k = 1; k < 101; k++) {
    var types = ['audiophile', 'auto', 'cooking', 'tech', 'hobby shop', 'mech keys']
    var itemType = types[Math.floor(Math.random() * types.length)]
    var itemName = faker.commerce.productName();
    var itemPrice = faker.commerce.price();
    var bool = Math.round(Math.random());
    var blurb1 = faker.lorem.paragraph();
    var blurb2 = faker.lorem.paragraph();
    var blurb3 = faker.lorem.paragraph();
    var arr = [itemType, itemName, itemPrice, bool, blurb1, blurb2, blurb3]
    db.run(`INSERT INTO item(product_type, item_name, price, isMassdropMade, blurb1, blurb2, blurb3) VALUES(?, ?, ?, ?, ?, ?, ?)`, arr, function(err) {
      if (err) {
        console.log('encountered error in item seeding', err);
      }
    });
  }
  
  for (var i = 1; i < 101; i++) {
    var renderSpecAmt = Math.floor((Math.random() * 10) + 3);
    var renderIncludeAmt = Math.floor((Math.random() * 5))
    var arr = [i, renderSpecAmt, renderIncludeAmt]
    console.log(arr);
    for (var j = 0; j < 17; j++) {
      arr.push(faker.lorem.words())
    }
    console.log(arr.length)
    db.run('INSERT INTO specs(item_id, renderSpecAmt, renderIncludeAmt, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11, spec12, include1, include2, include3, include4, include5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', arr, function(err) {
      if (err) {
        console.log(err);
      }
    })
  }
  db.close();
})