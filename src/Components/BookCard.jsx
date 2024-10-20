import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        // Check if the book is already in the wishlist
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const bookInWishlist = storedWishlist.some(item => item.id === book.id);
        setIsWishlisted(bookInWishlist);
    }, [book.id]);

    const toggleWishlist = () => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        let updatedWishlist;

        if (isWishlisted) {
            updatedWishlist = storedWishlist.filter(item => item.id !== book.id);
        } else {
            updatedWishlist = [...storedWishlist, book];
        }
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setIsWishlisted(!isWishlisted);
    };

    const showBookDetail = () => {
        navigate(`/book/${book.id}`, { state: book })
    }

    return (
        <div className="book-card" >
            <img src={book.formats['image/jpeg']} className='book_card_image' alt={book.title} />
            <h3 className='book-card_title'>{book.title}</h3>
            <p className='book-card_author'><span className='card_author_by'>By:</span> {book.authors.map(author => author.name).join(', ')}</p>
            <p className='book-card_author'><span className='card_author_by'>ID:</span> {book.id}</p>
            <p className='book-card_author'><span className='card_author_by'>Genre:</span> {book.bookshelves.join(', ')}</p>
            <button onClick={toggleWishlist} className='add_wishlist'>
                {isWishlisted ? <FaHeart fill='red' /> : <CiHeart />} Add to Wishlist
            </button>

            <button onClick={showBookDetail} className='add_wishlist'>Details</button>
        </div>
    );
};

export default BookCard;
