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
    publishedDated: {
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
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;