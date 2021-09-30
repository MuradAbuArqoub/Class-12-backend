const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');
const booksModel = require('./model')

function seedBookInformation(){
const user = new booksModel({
    title: 'alchimest',
    description: 'very nice',
    status: 'String',
    email: 'murad@gmail.com'
})

user.save();
}

// seedBookInformation()

// module.exports = booksModel

// http://localhost:3001/books?email=murad@gmail.com
function handleBooks(req, res) {
    let email = req.query.email
    booksModel.find({ email }, function (error, data) {
        if (error) {
            res.send('Error in getting data')
        } else {
            res.send(data)
        }
    })
}

module.exports = handleBooks;