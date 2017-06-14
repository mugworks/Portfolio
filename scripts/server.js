'use strict';

const express = require('express');
const app = express();
app.use(express.static('./publcdic'));

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

