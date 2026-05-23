import React, { useRef, useState } from "react";
import TaskList from "./TaskList";

function SearchBar() {
  const searchRef = useRef("");
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    searchRef.current = e.target.value;
    setQuery(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
      <TaskList query={query} />
    </div>
  );
}

export default SearchBar;