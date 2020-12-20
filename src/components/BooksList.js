import React from 'react';
import Book from './Book';

const BooksList = ({books, onAdd}) => {
   // console.log(books);
    return (
        <div className="books-list blocks">
            {books.map(book => (
                <Book key={book.id}
                book={book}
                onAdd={onAdd}
                />
            ))}
        </div>
    );
};

export default BooksList;