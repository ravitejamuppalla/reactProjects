import React from "react";

export default function Button(props) {
  console.log(props.colourdataButton);
  function handlingMethods() {
    props.newQuotes(true);
  }
  return (
    <div className="buttons">
      <button
        style={{ backgroundColor: props.colourdataButton }}
        onClick={handlingMethods}
        className="button"
      >
        New Quote
      </button>
    </div>
  );
}
