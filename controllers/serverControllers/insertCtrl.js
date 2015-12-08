// intento de coneccion a mongolab
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://camilo.posadaa:1234@ds027295.mongolab.com:27295/libreriadb'
var book ={};

module.exports.add=function (req,res) {
    book = req.body;
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var books = db.collection('books')
      books.insert(  book,   function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(book))
        db.close()
      });
    });
    console.log("Insertando"+req.body);
    res.json(req.body);
};
//prueba de coneccion con mongolab.com
/*
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('books');
    collection.find().toArray(function (err,docs) {
        if (err)throw err;
        console.log(docs);
        db.close();
    });
});
*/
//prueva de insercion mongolab.com

/*var seddata = [ { 
    name: 'Las enseñansas de don juan',
    year: '2009',
    language: 'Ingles',
    author: 'Carlos castaneda' },
  { 
    name: 'conocimiento silencioso',
    year: '2015',
    language: 'Ingles',
    author: 'carlos castaneda' },
  { 
    name: 'otro libro ',
    year: '2009',
    language: 'Ingles',
    author: 'otro autor' } 
];


mongo.connect(url, function(err, db) {
  if (err) throw err
  var books = db.collection('books')
  books.insert(  seddata,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(seddata))
    db.close()
  });
});
*/