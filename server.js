var express = require("express");  //Para el servidor 
var mongo = require("mongodb");   //coneccion a la base de datos
var bodyParser = require("body-parser"); //Para JSON
var path = require("path");

var app = express();  //Creo el servidor con express
/* -- Controladores del servidor --*/
var bookCtrl = require('./server/controllers/bookCtrl');  //bookCtrl para operaciones de inserción, borrado, busqueda etc.
/*¨--------------------------------*/
app.use(bodyParser.json());
/*-- Directorios estaticos --*/
app.use('/app', express.static(__dirname + "/app"));  //Directorio donde esta angular
app.use('/app', express.static(__dirname + "/server"));
/*---------------------------*/

/*------  EndPoints ----*/
app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
/*-- Operaciones CRUD ---*/
app.get('/api/book/findall', bookCtrl.getAll); //Obtener todos los libros
app.post('/api/book/del', bookCtrl.borra);//Borrar un libro
app.post('/api/book/add', bookCtrl.add); //Añadir un libro

/*---        --------*/

/*-- Corro el servidor --*/
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  
  console.log("Chat server listening at");
});

