var express = require('express');

var app = express();

// Rutas
app.get('/', (request, response, next) => {

    response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })

});

module.exports = app;