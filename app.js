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
app.get('/', (req, res) => {
    // la req = request, son los datos que envia el cliente y la res = response, los datos que envío
    res.status(200).send(
        "<h1>Página de inicio</h1>"
    );
});

// exportar este modulo
module.exports = app;