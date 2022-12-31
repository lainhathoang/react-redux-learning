import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBook = [...books, response.data];
    setBooks(updatedBook);
  };

  const deleteBook = async (idToRemove) => {
    const response = await axios.delete(
      `http://localhost:3001/books/${idToRemove}`
    );

    const updatedBooks = books.filter((book) => book.id !== idToRemove);
    setBooks(updatedBooks);
  };

  // when updated succesfully -> use response data re-update in local
  const editBook = async (idToEdit, newTitle) => {
    const response = await axios.put(
      `http://localhost:3001/books/${idToEdit}`,
      {
        title: newTitle,
      }
    );

    // ...response.data -> different data between server & local

    const updateBooks = books.map((book) => {
      if (book.id === idToEdit) {
        return { ...book, ...response.data };
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
