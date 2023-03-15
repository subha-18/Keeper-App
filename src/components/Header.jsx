import React from "react";
import SearchArea from "./SearchArea";
import HighlightIcon from "@mui/icons-material/Highlight";
function Header(props) {
  return (
    <header>
      <h1>
        <HighlightIcon fontSize="large" />
        Keeper App
      </h1>
      <SearchArea setSearchQuery={props.setSearchQuery} />
    </header>
  );
}
export default Header;
