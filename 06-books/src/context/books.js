import axios from "axios";
import { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  // const stableFetchBoooks = useCallBack(fetchBooks, [])

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBook = [...books, response.data];
    setBooks(updatedBook);
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

  const deleteBook = async (idToRemove) => {
    const response = await axios.delete(
      `http://localhost:3001/books/${idToRemove}`
    );

    const updatedBooks = books.filter((book) => book.id !== idToRemove);
    setBooks(updatedBooks);
  };

  // value to share
  const valueToShare = {
    books,
    createBook,
    editBook,
    deleteBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// import BooksContext, {Provider} from "..."
