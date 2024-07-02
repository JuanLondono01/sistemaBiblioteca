const Book = require('../models/books');
const bookCtrl = {};

bookCtrl.getBooks = async (req, res) => {
    try {
        const booksData = await Book.find().lean();
        if (!booksData) {
            res.status(404).json({
                message: 'No books found',
            });
        }

        res.status(200).send(booksData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

bookCtrl.addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(200).json({ message: 'Book added succesfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

bookCtrl.getBookInfo = async (req, res) => {
    try {
        const bookData = await Book.findById(req.params.id);

        if (!bookData) {
            res.status(404).json({ message: 'book not found' });
        }

        res.status(200).send(bookData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

bookCtrl.updateBookById = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!updatedBook) {
            res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            message: 'Book updated',
            book: updatedBook.title,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

bookCtrl.deleteBookById = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            message: 'Book deleted',
            book: deletedBook.title,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = bookCtrl;
