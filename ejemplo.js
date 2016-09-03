var express = require('express');
var app = express();
var fs = require("fs");

const hostname = 'localhost';
const port = 3000;

var database = require('./database.js');

var mesas = database.mesas();
var usuarios = database.usuarios();



app.get('/', function(req, res){

    res.send('Bienvenido a PICNIC DEVELOPMENT S.A.');
});

app.get('/mesa/:id', function (req, res) {
      
    var RESPONSE = {};
     var lookup = {};
for (var i = 0, len = mesas.length; i < len; i++) {
    lookup[mesas[i].id] = mesas[i];
}
    var mesa = lookup[req.params.id] ;
    
    if(mesa){
    RESPONSE['mensaje'] = "Listado de Mesas Disponibles";
    RESPONSE['status'] = "SUCCESS";
    RESPONSE['success'] = true;
    RESPONSE['data'] = mesa;
    }else{
    RESPONSE['mensaje'] = "Mesa no encontrada";
    RESPONSE['status'] = "ERROR";
    RESPONSE['success'] = false;
    RESPONSE['data'] = "";
    }
      res.end( JSON.stringify(RESPONSE));
})

app.get('/mesas', function (req, res) {
    
    var RESPONSE = {};
    RESPONSE['mensaje'] = "Listado de Mesas Disponibles";
    RESPONSE['status'] = "SUCCESS";
    RESPONSE['success'] = true;
    RESPONSE['data'] = mesas;
      res.end( JSON.stringify(RESPONSE));
})


app.get('/usuarios', function (req, res) {
    
    var RESPONSE = {};
    RESPONSE['mensaje'] = "Listado de Usuarios";
    RESPONSE['status'] = "SUCCESS";
    RESPONSE['success'] = true;
    RESPONSE['data'] = usuarios;
      res.end( JSON.stringify(RESPONSE));
})

app.get('/usuario/:id', function (req, res) {
      
    var RESPONSE = {};   
    var lookup = {};
for (var i = 0, len = usuarios.length; i < len; i++) {
    lookup[usuarios[i].id] = usuarios[i];
}
    var usuario = lookup[req.params.id] ;
    
    if(usuario){
    RESPONSE['mensaje'] = "Usuario Encontrado";
    RESPONSE['status'] = "SUCCESS";
    RESPONSE['success'] = true;
    RESPONSE['data'] = usuario;
    }else{
    RESPONSE['mensaje'] = "Usuario no disponible";
    RESPONSE['status'] = "ERROR";
    RESPONSE['success'] = false;
    RESPONSE['data'] = "";
    }
      res.end( JSON.stringify(RESPONSE));
})




app.get('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(port,function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("PICNIC is running at http://%s:%s", host, port)

})

