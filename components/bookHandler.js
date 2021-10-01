'use strict';

const booksModel = require("./books.js");

// http://localhost:3001/books?email=murad@gmail.com

// function that gets data deppending on the email when we log in

function getBookHandler(req, res) {
  let email = req.query.email
  booksModel.find({ email }, function (error, data) {
    if (error) {
      res.send('Error in getting data')
    } else {
      res.send(data)
    }
  })
}

// a function to create new book
let createBookHandler = async (req, res) => {

  let { title1, author1, description1, status1, email1 } = req.body;

  await booksModel.create({
    title: title1,
    author: author1,
    description: description1,
    status: status1,
    email: email1
  })

  booksModel.find({ email }, function (error, data) {
    if (error) {
      res.send('Error in getting data')
    } else {
      res.send(data)
    }
  })
}

// 

module.exports = {
  getBookHandler,
  createBookHandler
}

