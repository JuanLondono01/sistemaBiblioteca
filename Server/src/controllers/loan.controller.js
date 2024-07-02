const Loan = require('../models/loan');
const Book = require('../models/books');
const loanCtrl = {};

loanCtrl.loanBook = async (req, res) => {
    try {
        const { userId, bookIds } = req.body;

        const loans = [];

        for (const bookId of bookIds) {
            const book = await Book.findById(bookId);

            if (!book || !book.availability) {
                return res
                    .status(400)
                    .json({
                        message: `El libro con ID ${bookId} no está disponible`,
                    });
            }

            const loan = new Loan({
                user: userId,
                book: bookId,
            });

            await loan.save();

            book.availability = false;
            await book.save();

            loans.push(loan);
        }

        res.status(201).json({
            message: 'Libros prestados exitosamente',
            loans,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al prestar los libros', error });
    }
};

loanCtrl.returnBook = async (req, res) => {
    try {
        const { loanId } = req.params;

        const loan = await Loan.findById(loanId).populate('book');
        if (!loan || loan.returnDate) {
            return res.status(400).json({
                message: 'El préstamo no es válido o el libro ya fue devuelto',
            });
        }

        loan.returnDate = new Date();
        await loan.save();

        const book = await Book.findById(loan.book._id);
        book.availability = true;
        await book.save();

        if (loan.returnDate) {
            await Loan.findByIdAndDelete(loanId);
        }

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

module.exports = loanCtrl;
