import { createContext, useState } from "react";
import Filter from "../component/Emojis/Filter";

const emojiContext = createContext({
  searchData: (data) => {},
  emojiResults: [],
});

export const EmojiCreateContext = (props) => {
  const [results, setResults] = useState("");
  function searchHandler(inputsearchText) {
    console.log(inputsearchText);
    let filteredData = Filter(inputsearchText);
    setResults(filteredData);
  }

  return (
    <emojiContext.Provider
      value={{
        searchData: searchHandler,
        emojiResults: results,
      }}
    >
      {props.children}
    </emojiContext.Provider>
  );
};

export default emojiContext;
