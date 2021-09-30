'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const server = express();
const PORT = process.env.PORT;
const handleBooks = require('./components/books')
const addBooksHandler = require('./components/addBook')
server.use(express.json());

server.use(cors());


//mangoose connected to the port 27017 *do not change* test is the data base name we have to change it to the name we have


// Routes
server.get('/', homeRouteHandler);
server.get('/books', handleBooks);
server.post('/addBooks', addBooksHandler);
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