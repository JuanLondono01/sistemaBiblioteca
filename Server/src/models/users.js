const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Por favor, ingrese un email válido'],
    },
    address: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
    booksLoaned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: false
        },
    ],
=======
>>>>>>> 717c77c111a784f461ae86012d6eb7f643d40e27
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
