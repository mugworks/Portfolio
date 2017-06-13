'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;


app.get( '*', function( request, response ) {
  response.sendFile( './public/404.html', { root: '.' } );
});

app.listen( PORT, function() {
  console.log( `Listening on port: ${PORT}` );
});