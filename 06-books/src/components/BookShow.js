import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => {
    onDelete(book.id);
  };

  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  };

  /**
   * dont need to pass onEdit() & handleEditDisplay() to
   * the child component
   * - just need to combie all of them into one function
   * handleSubmit() and pass only this function to the child
   */
  const handleEdit = (newTitle) => {
    setShowEdit(!showEdit);
    onEdit(book.id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onEdit={handleEdit} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/100/50/?blur`}
        alt={book.title}
      />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleClickEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
