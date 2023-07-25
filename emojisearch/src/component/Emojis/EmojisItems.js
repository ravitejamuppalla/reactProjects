import React from "react";
import classes from "./EmojisItem.module.css";
import copy from "copy-to-clipboard";
export default function EmojisItems(props) {
  const { title, symbol } = props;
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  function copyHandler() {
    copy(symbol);
    alert("Copied to clipBord " + symbol);
  }

  return (
    <div className={classes.resultsItem} onClick={copyHandler}>
      <img className={classes.symbol} src={src} alt={title} />
      <div className={classes.title}>{title}</div>
      <div className={classes.info}>Click to copy</div>
    </div>
  );
}
