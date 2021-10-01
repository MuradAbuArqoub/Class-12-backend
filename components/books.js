const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
  });

const booksModel = mongoose.model('Book', BookSchema);


function seedBookInformation(){
const alchimest = new booksModel({
    title: 'alchimest',
    description: 'a traveler trying to find a hidden trisure but the tresure is ...',
    status: 'something something',
    email: 'muradaboarkob2000@gmail.com'
})
const alice = new booksModel({
    title: 'alice',
    description: 'lost in a woderland full of misterry and wonders ...',
    status: 'something something',
    email: 'murad@gmail.com'
})
const harrypotter = new booksModel({
    title: 'harrypotter',
    description: 'a world full of magic and wonders, wizerds learn how to become ...',
    status: 'something something',
    email: 'notMurad@gmail.com'
})

alchimest.save();
alice.save();
harrypotter.save();
}
// seedBookInformation();

module.exports = booksModel;