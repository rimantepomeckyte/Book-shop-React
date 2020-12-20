import React from 'react';

const Book = ({book, onAdd}) => {
    //console.log(cartItems);
    //console.log(book)
    return (
        <div className="book-card mr-4 my-3">
            <img className="book-img" src={book.img} alt="book"/>
            <div className='book-card-body'>
                <h5 className="book-title mb-2">{book.title}</h5>
                <p className="book-author">{book.author}</p>
                <p className="book-price pb-0 mb-0 price d-flex justify-content-center"><strong>{book.price} €</strong>
                </p>
                <p className="book-rating d-flex justify-content-center">Įverinimas: {book.rating}</p>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => onAdd(book)} className='btn bg-success text-white'>Pridėti į krepšelį
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Book;