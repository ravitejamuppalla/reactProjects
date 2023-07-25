import React, { Fragment, useContext, useState } from "react";
import emojiContext from "../../store";
import EmojisItems from "./EmojisItems";
import Filter from "./Filter";

export default function EmojisResults() {
  const cntx = useContext(emojiContext);
  console.log(cntx.emojiResults);
  let results;
  if (!cntx.emojiResults) results = Filter();
  else results = cntx.emojiResults;

  return results.map((data, index) => {
    return (
      <EmojisItems
        id={index}
        title={data.title}
        symbol={data.symbol}
      ></EmojisItems>
    );
  });
}
