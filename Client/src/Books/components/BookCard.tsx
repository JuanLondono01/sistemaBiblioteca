import '../styles/card.css'

export const BookCard = () => {
    return (
        <>
            <div className="card-container">
                <section className='book-cover'>
                <img src="" alt="Book cover" />
                </section>
                <section className='book-info'>
                    <h3>Title</h3>
                    <p>Author</p>
                </section>
            </div>
        </>
    )
};