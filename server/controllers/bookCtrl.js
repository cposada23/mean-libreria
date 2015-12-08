/*---- bookctrl para operaciones CRUD --*/
var mongo = require('mongodb').MongoClient; //coneccion a la base de datos 
var url = 'mongodb://camilo.posadaa:1234@ds027295.mongolab.com:27295/libreriadb' // URL de la base de datos almacenada en mongolab.com
var book ={};

/*--- Modulo para añadir un libro -----*/
module.exports.add=function (req,res) {  //Exporto el modulo para que pueda ser usado en el servidor
    book = req.body; //Libro que sera insertado, los datos se mandan por medio de un formulario con angularJS
    console.log("Insertando"+req.body);
    mongo.connect(url, function(err, db) {  //Conexión a la url
      if (err) throw err 
      var books = db.collection('books')  //Se inserta en la colección 'books'
      books.insert(  book,   function(err, data) { //inserción
        if (err) throw err
        console.log(JSON.stringify(book))  
        db.close() //Cierro la conección 
      });
    });
    
    res.json(req.body); 
};
module.exports.getAll = function (req,res) {
  console.log("buscando todos ..." );
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    var books = db.collection('books');
    books.find().toArray(function (err,libros) {
        if (err)throw err;
        console.log("Libros" + JSON.stringify(libros));
        db.close();
        console.log("db close enviando respuesta");
        res.json(libros);
    });
  });
};
module.exports.borra=function (req,res) {  //Exporto el modulo para que pueda ser usado en el servidor
    book = req.body; //Libro que sera insertado, los datos se mandan por medio de un formulario con angularJS
    console.log("BORRANDO: "+req.body);
    
    mongo.connect(url, function (err, db) {
       if (err)throw err;
       var books = db.collection('books');
       books.remove(book,function (err,data) {
           if (err) throw err;
           db.close();
       })
    });
    res.json(req.body); 
};
