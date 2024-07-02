const Loan = require('../models/loan');
const User = require('../models/users')
const Book = require('../models/books');
const loanCtrl = {};

loanCtrl.loanBook = async (req, res) => {
    try {
        const { userId, bookId } = req.body;
        const user = User.findById(userId)
        const book = await Book.findById(bookId);

        if (!book || !book.availability) {
            return res
                .status(400)
                .json({ message: 'El libro no está disponible' });
        }

        const loan = new Loan({
            user: userId,
            book: bookId,
        });

        await loan.save();

        book.availability = false;
        await book.save();

        user.booksLoaned.push(book)
        await user.save()

        res.status(201).json({ message: 'Libro prestado exitosamente', loan });
    } catch (error) {
        res.status(500).json({ message: 'Error al prestar el libro', error });
    }
};

loanCtrl.returnBook = async (req, res) => {
    try {
        const { loanId } = req.params;

        const loan = await Loan.findById(loanId).populate('book');
        if (!loan || loan.returnDate) {
            return res
                .status(400)
                .json({
                    message:
                        'El préstamo no es válido o el libro ya fue devuelto',
                });
        }

        loan.returnDate = new Date();
        await loan.save;

        const book = Book.findById(loan.book._id);
        book.availability = true;
        await book.save();
        res.status(200).json({ message: 'Libro devuelto exitosamente', loan });
    } catch (error) {
        res.status(500).json({ message: 'Error al devolver el libro', error });
    }
};

loanCtrl.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find().populate('user').populate('book');
        res.status(200).json(loans);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los préstamos',
            error,
        });
    }
};



module.exports = loanCtrl