import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookDetail = () => {
    const location = useLocation();

    return (
        <div className="book-card-details">
            <img src={location.state.formats['image/jpeg']} className='book_card_image' alt={location.state.title} />
            <h3 className='book-card_title'>{location.state.title}</h3>
            <p className='book-card_author'><span className='card_author_by'>By:</span> {location.state.authors.map(author => author.name).join(', ')}</p>
            <p className='book-card_author'><span className='card_author_by'>ID:</span> {location.state.id}</p>
            <p className='book-card_author'><span className='card_author_by'>Genre:</span> {location.state.subjects.join(', ')}</p>
            <p className='book-card_author'><span className='card_author_by'>Type:</span> {location.state.bookshelves.map(bookshelve => bookshelve).join(',')}</p>

        </div>
    )
}

export default BookDetail