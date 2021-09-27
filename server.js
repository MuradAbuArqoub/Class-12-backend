'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose  = require('mongoose')
const handleBooks = require('./books')

const axios = require('axios');

const server = express();
server.use(cors());

const PORT = process.env.PORT;

//mangoose connected to the port 27017 *do not change* test is the data base name we have to change it to the name we have
mongoose.connect('mongodb://localhost:27017/BookData');


// Routes
server.get('/', homeRouteHandler);
server.get('/myBooks',handleBooks);

server.get('*', notFoundHandler);
///////////////

// Functions Handler
function homeRouteHandler (req, res){
    res.send('home route')
}



function notFoundHandler (req, res){
    res.status(404).send('not found 404')
}

///////////////

server.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}`)
})