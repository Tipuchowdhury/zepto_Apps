import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [genreFilter, setGenreFilter] = useState('');
    const [error_data, setError] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`https://gutendex.com/books?page=${page}`);

                setBooks(response.data.results);

            } catch (error) {

                setError(!error_data)
            }

        };
        fetchBooks();
    }, [page]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleGenreChange = (event) => {
        setGenreFilter(event.target.value);
    };

    // Filter the books based on search and genre
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase()) &&
        (!genreFilter || book.bookshelves.includes(genreFilter))
    );
    let gen = [];
    let option = "";
    option = books.map((book, index) => (
        <div key={index}>
            {book.bookshelves.map((bookshelve, i) => {
                gen.push(bookshelve)
            }

            )}

        </div>
    ))

    const filterGenre = gen.filter((item, index) => gen.indexOf(item) === index)

    return (
        <>
            <div className='booklist_page'>
                <div className='search_filter'>
                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={search}
                        onChange={handleSearch}
                    />
                    <select value={genreFilter} onChange={handleGenreChange}>
                        <option value="">All Genres</option>
                        {filterGenre.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                        {/* Add genre options dynamically */}
                    </select>

                </div>
                <div className="book-list">
                    {filteredBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
                <hr />
                <div className="pagination" style={books.length > 0 ? { display: "flex" } : { display: "none" }}>
                    <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} className='btn_class'>Previous</button>
                    <button onClick={() => setPage(prev => prev + 1)} className='btn_class'>Next</button>
                </div>
            </div>
            {/* loading modal */}
            <div className="modal" id="modal-loading" data-backdrop="static" style={books.length > 0 ? { display: 'none' } : { display: 'flex' }}>
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="loading-spinner"></div>
                            <div>{error_data ? "Check your connection" : "Loading, Hold tight!!!"} </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookList;
