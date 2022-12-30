import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBook = [
      ...books,
      {
        id: Math.floor(Math.random() * 9999),
        title,
      },
    ];
    setBooks(updatedBook);
  };

  const deleteBook = (idToRemove) => {
    const updatedBooks = books.filter((book) => book.id !== idToRemove);
    setBooks(updatedBooks);
  };

  const editBook = (idToEdit, title) => {
    const updateBooks = books.map((book) => {
      if (book.id === idToEdit) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
