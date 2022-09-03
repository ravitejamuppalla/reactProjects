import React, { useRef, useState, useContext } from "react";
import classes from "./AvaliableItem.module.css";
import cartItems from "../../store/cart-context";
import Card from "../UI/Card";
let currentItems = 1;
function AvaliableItem(props) {
  const contextvalue = useContext(cartItems);
  const extractingtheCartInput = useRef();
  const [changeInput, setChangeInput] = useState(1);
  function addingItem(e) {
    e.preventDefault();
    const currentItemAddedToCart = extractingtheCartInput.current.value;
    let totalValues = {
      ...props,
      itemAddedToCart: currentItemAddedToCart,
    };
    console.log(totalValues);
    contextvalue.addingItems(totalValues);
  }

  function decreaseItem(e) {
    e.preventDefault();
    changeInput > 1
      ? setChangeInput((currentvalue) => currentvalue - 1)
      : setChangeInput((currentvalue) => currentvalue);
  }

  function increaseItem(e) {
    e.preventDefault();
    changeInput < 10
      ? setChangeInput((currentvalue) => currentvalue + 1)
      : setChangeInput((currentvalue) => currentvalue);
  }
  function extractingCurrentDataInput(e) {}

  return (
    <div className={classes.card}>
      <div>
        <img className={classes.imgOfList} src={props.thumbnail}></img>
      </div>
      <div className={classes.MainHeading}>
        <span>{props.title}</span>
      </div>
      <div className={classes.Price}>
        <span>${props.price}</span>
      </div>
      <div className={classes.currentCartItem}>
        <button onClick={decreaseItem}>-</button>
        <input
          onChange={extractingCurrentDataInput}
          ref={extractingtheCartInput}
          className={classes.input}
          min="1"
          max="20"
          value={changeInput}
        ></input>
        <button onClick={increaseItem}>+</button>
      </div>
      <div>
        <button className={classes.addToCart} onClick={addingItem}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default AvaliableItem;
