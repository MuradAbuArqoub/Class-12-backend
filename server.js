'use strict';

const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT;
server.use(express.json());
mongoose.connect('mongodb://localhost:27017/BookData');

const {getBookHandler, createBookHandler,deleteBookHandler,UpdateBookHandler} = require('./components/bookHandler');

//mangoose connected to the port 27017 *do not change* test is the data base name we have to change it to the name we have


// Routes
server.get('/', homeRouteHandler);
server.get('/getBook', getBookHandler);
server.post('/createBook', createBookHandler);
server.delete('/deleteBook',deleteBookHandler);
server.put('/updateBook',UpdateBookHandler);



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