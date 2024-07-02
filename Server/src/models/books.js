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
    publishedDate: {
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
    availability: {
        type: Boolean,
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);


module.exports = Book;
