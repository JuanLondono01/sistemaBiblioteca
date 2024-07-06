const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    editorial: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
    publishedDated: {
=======
    publishedDate: {
>>>>>>> 717c77c111a784f461ae86012d6eb7f643d40e27
        type: Date,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    genre: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
=======
    bookCover: {
        type: String,
        required: true
    },
>>>>>>> 717c77c111a784f461ae86012d6eb7f643d40e27
    availability: {
        type: Boolean,
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

<<<<<<< HEAD
=======

>>>>>>> 717c77c111a784f461ae86012d6eb7f643d40e27
module.exports = Book;
