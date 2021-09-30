const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
  });

const booksModel = mongoose.model('Book', BookSchema);

module.exports = booksModel