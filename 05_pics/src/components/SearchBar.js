import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  const handleOnChanged = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleOnChanged} />
      </form>
    </div>
  );
}

export default SearchBar;
