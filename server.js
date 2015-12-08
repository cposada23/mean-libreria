var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var insertCtrl = require('./controllers/serverControllers/insertCtrl');
app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app"));
app.use('/app', express.static(__dirname + "/controllers"));

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/api/book/add', insertCtrl.add);
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  
  console.log("Chat server listening at");
});