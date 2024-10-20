import React, { useEffect, useState } from 'react'

function Wishlist() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const wishlistItem = JSON.parse(localStorage.getItem('wishlist'));
        if (wishlistItem) {
            setItems(wishlistItem);
        }
    }, []);

    return (
        <div className='wishlist_item'>
            {items.map((item) => (
                <div className="book-card" key={item.id}>
                    <img src={item.formats['image/jpeg']} className='book_card_image' alt={item.title} />
                    <h3 className='book-card_title'>{item.title}</h3>
                    <p className='book-card_author'><span className='card_author_by'>By:</span> {item.authors.map(author => author.name).join(', ')}</p>
                    <p className='book-card_author'><span className='card_author_by'>ID:</span> {item.id}</p>
                    <p className='book-card_author'><span className='card_author_by'>Genre:</span> {item.subjects.join(', ')}</p>

                </div>

            ))}
        </div>

    )
}

export default Wishlist