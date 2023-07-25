import React, { createContext, Fragment } from "react";

const quotesData = createContext({
  newQuotes: [],
  colorAndBackGroundColor: "",
});

export default function QuotesDataCreateContext() {
  function newQuotesData() {}
  return <quotesData.Provider value={{}}>{props.children}</quotesData.Provider>;
}
