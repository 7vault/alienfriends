import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        className="pa3 br3 bw2 b--green"
        type="search"
        placeholder="search contact name"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
