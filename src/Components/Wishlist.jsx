import React, { useEffect, useState } from 'react';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
        if (storedWishlist) {
            setWishlist(storedWishlist);
        }
    }, []);

    return (
        <div className="wishlist">
            {wishlist.length === 0 ? (
                <p>No books in your wishlist</p>
            ) : (
                wishlist.map(book => (
                    <div key={book.id} className="wishlist-item">
                        <img src={book.formats['image/jpeg']} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>By: {book.authors.map(author => author.name).join(', ')}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlist;
