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
// http://localhost:3001/createBook?email=murad@gmail.com
// http://localhost:3001/createBook?email1=email&title1=${bookName}&description1=${bookDescription}&status1

// a function to create new book
function createBookHandler(req, res) {

  let { title, author, description, status, email } = req.body;

  booksModel.create({
    title,
    author,
    description,
    status,
    email
  }).then(() => {

    booksModel.find({ email }, function (error, data) {
      if (error) {
        res.send('Error in getting data')
      } else {
        res.send(data)
      }
    })
  })

}

function deleteBookHandler(req, res) {

  let bookid = req.query.bookid;
  let email = req.query.email;

  booksModel.deleteOne({ _id: bookid }).then(() => {
    booksModel.find({ email }, (function (error, data) {
      if (error) {
        console.log('Error with getting the data', error);
      }
      else {
        console.log(data);
        res.send(data);
      }
    }))
  })
}

// function updateBookHandler(req, res) {
//   res.send('update')
//   let { title, author, description, status, email, bookId } = req.body;
//   booksModel.findByIdAndUpdate(bookId, { title, author, description, status }, (error, updatedData) => {
//     if (error) { console.log('error in updating') }
//     else {
//       console.log('updatedData', updatedData);
//       booksModel.find({ email }, (function (error, data) {
//         if (error) {
//           console.log('Error with getting the data', error);
//         }
//         else {
//           console.log(data);
//           res.send(data);
//         }
//       }))
//     }
//   })

// }
let UpdateBookHandler = (req, res) => {

  let { title, author, description, status, bookId, email } = req.body;

  booksModel.findByIdAndUpdate(bookId, { title, author, description, status }).then(() => {
    booksModel.find({ email }, (function (error, data) {
      if (error) {
        console.log('Error with getting the data', error);
      }
      else {
        console.log(data);
        res.send(data);
      }
    }))
  })
}


// 

module.exports = {
      getBookHandler,
      createBookHandler,
      deleteBookHandler,
      UpdateBookHandler
    }

