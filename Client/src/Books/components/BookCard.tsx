import React from 'react';
import '../styles/card.css'

interface Book {
    title: string;
    author: string;
}

export const BookCard: React.FC<Book> = ({title, author}) => {
    return (
        <>
            <div className="card-container">
                <section className='book-cover'>
                <img src="" alt="Book cover" />
                </section>
                <section className='book-info'>
                    <h3>{title}</h3>
                    <p>{author}</p>
                </section>
            </div>
        </>
    )
};