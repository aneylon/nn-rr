import { useState } from "react";
import "./SearchBar.css";
import { useHistory } from "react-router-dom";
export default function SearchBar() {
  const [term, setTerm] = useState("");
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?word=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          placeholder="take a look"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          required
        />
      </form>
    </div>
  );
}
