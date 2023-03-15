import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchArea(props) {
  function handleSearch(event) {
    const query = event.target.value;
    return props.setSearchQuery(query);
  }
  return (
    <div className="search-note">
      <div className="icon-wrap">
        <SearchIcon />
        <input type="text" placeholder="Search notes" onChange={handleSearch} />
      </div>
    </div>
  );
}
export default SearchArea;
