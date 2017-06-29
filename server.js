'use strict';

require('dotenv').config();
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));

const bodyParser = require('body-parser').urlencoded({extended: true}); //eslint-disable-line
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000; //eslint-disable-line

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for ', request.params[0]);
  console.log(process.env.GITHUB_TOKEN);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get( '*', function( request, response ) {
  response.sendFile( './public/404.html', { root: '.' } );
});

app.listen( PORT, function() {
  console.log( `Listening on port: ${PORT}` );
});