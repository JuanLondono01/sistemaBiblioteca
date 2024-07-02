const mongoose = require('mongoose');

const loanSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    loanDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    returnDate: {
        type: Date,
        required: false,
    },
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
