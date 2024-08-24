import React, { useState, useEffect } from 'react';
import { Genres } from '../Books/components/Genres';
import { SideBar } from '../Global/Components/SideBar';
import { SearchBar } from '../Global/Components/SearchBar';
import './styles/books.css';
import { BooksAPI } from './helpers/BooksAPI';
import { BookCard } from './components/BookCard';
import { IoAddCircleOutline } from 'react-icons/io5';
import { BasicModal } from './components/Modal';

interface BookData {
    title: string;
    author: string;
    _id: string;
    genre: string;
}

export const Books = () => {
    const [InSearch, setInSearch] = useState(false);

    const [SearchedBook, SetSearchedBook] = useState('');
    const [books, setBooks] = useState<BookData[]>([]);
    const [open, setOpen] = useState(false);
    const [activeGenres, setActiveGenres] = useState<string[]>([]);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        SetSearchedBook(value);
        setInSearch(value !== '');
    };

    const deleteSearchText = () => {
        SetSearchedBook('');
        setInSearch(false);
    };

    const { getBooks } = BooksAPI();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const bookList = await getBooks();
                if (bookList) {
                    setBooks(bookList);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleGenreClick = (genre: string) => {
        if (activeGenres.includes(genre)) {
            setActiveGenres(activeGenres.filter((g) => g !== genre));
        } else {
            setActiveGenres([...activeGenres, genre]);
        }
    };

    const isGenreActive = (genre: string) => activeGenres.includes(genre);

    // Filtra los libros por los géneros activos o por busqueda
    const filteredBooks = books.filter((book) => {
        const matchesGenre =
            activeGenres.length === 0 || activeGenres.includes(book.genre);
        const matchesSearch =
            SearchedBook === '' ||
            book.title.toLowerCase().includes(SearchedBook.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    return (
        <>
            <SideBar
                activeBooks={true}
                activeUsers={false}
                activeLoans={false}
                activeSettings={false}
            />
            <h1>Sistema Biblioteca</h1>

            <h2>Books</h2>
            <div className='action-bar'>
                <section className='filters'>
                    {['Terror', 'Suspenso', 'Accion', 'Historia', 'Drama'].map(
                        (genre) => (
                            <Genres
                                key={genre}
                                text={genre}
                                name={genre}
                                isActive={isGenreActive(genre)}
                                onClick={() => handleGenreClick(genre)}
                            />
                        )
                    )}
                    <section className='search-sect'>
                        <IoAddCircleOutline
                            size={30}
                            color='gray'
                            className='add-book'
                            onClick={handleOpenModal}
                        />
                        <SearchBar
                            search='Book'
                            list='book-list'
                            onChange={changeSearch}
                            value={SearchedBook}
                            inSearch={InSearch}
                            deleteText={deleteSearchText}
                        />

                        <datalist id='book-list'>
                            {books.map((book) => (
                                <option key={book.title} value={book.title} />
                            ))}
                        </datalist>
                    </section>
                </section>
            </div>
            <section className='card-list'>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <BookCard
                            key={book._id}
                            title={book.title}
                            author={book.author}
                        />
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </section>

            <BasicModal open={open} onClose={handleCloseModal} />
        </>
    );
};
