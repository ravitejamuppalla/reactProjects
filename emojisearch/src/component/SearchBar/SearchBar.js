import React from "react";
import searchBarclasses from "./SearchBar.module.css";
import emojiContext from "../../store";
import { useContext } from "react";

export default function SearchBar() {
  const cntx = useContext(emojiContext);
  function searchResults(data) {
    cntx.searchData(data.target.value);
  }
  return (
    <div className={searchBarclasses.searchBar}>
      <input
        id={searchBarclasses.emojiSearch}
        placeholder="Search Emoji"
        onChange={searchResults}
      ></input>
    </div>
  );
}
