//inicializacion
var express= require('express');
var app = express();//utilizamos express
var mongoose= require('mongoose');//moongose par mongodb
var port = process.env.PORT || 8080;//Cogemos el pierto 8080

mongoose.connect('mongodb://localhost:27017/Cine2');//Hacemos la conexion a la base

var db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error'));

app.configure(function(){
	app.use(express.static(__dirname + '/'));
	app.use(express.logger('dev'));
	app.use(express.methodOverride());
});
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));
require('./routes.js')(app);

app.listen(port);
console.log("APP por el puerto"+port);