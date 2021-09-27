const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
  });


  const booksModel = mongoose.model('Book', BookSchema);

  function seedBookInformation(){
      const user = new booksModel({
        title: 'String',
        description: 'String',
        status: 'String',
        email: 'String'
      })

      user.save();
}

function handleBooks(req, res) {
    let emailQ = req.query.email
    booksModel.find({ email: emailQ }, function (error, data) {
        if (error) {
            res.send('Error in getting data')
        } else {
            res.send(data)
        }
    })
}

// seedBookInformation()
module.exports = handleBooks;