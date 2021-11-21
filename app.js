'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// archivos de rutas

// middlewares == metodo que se ejecuta antes que las acciones del controlador
app.use(bodyParser.urlencoded({extended:false})); // configuracion necesaria para body parser
app.use(bodyParser.json()); // convierto todo lo que llegue a json

// CORS

// rutas

// exportar este modulo
module.exports = app;