import { Fragment } from "react";
import classes from "./CartItem.module.css";
import React, { useRef, useState, useContext } from "react";
import cartItems from "../../store/cart-context";

function CartItem(props) {
  console.log(props);
  const contextvalue = useContext(cartItems);
  const [changeInput, setChangeInput] = useState(props.itemAddedToCart);
  function decreaseItem(e) {
    e.preventDefault();
    setChangeInput((currentTotal) => +currentTotal - 1);
    let totalValues = {
      ...props,
      itemAddedToCart: 1,
    };
    contextvalue.removingItems(totalValues);
  }

  function increaseItem(e) {
    e.preventDefault();
    setChangeInput((currentTotal) => +currentTotal + 1);
    let totalValues = {
      ...props,
      itemAddedToCart: 1,
    };
    console.log(totalValues.itemAddedToCart);
    contextvalue.addingItems(totalValues);
  }

  return (
    <Fragment>
      <div className={classes.cartItems}>
        <div className={classes.cartItem}>
          <div className={classes.cartImg}>
            <img className={classes.ImgValue} src={props.thumbnail}></img>
          </div>
          <div className={classes.cartData}>
            <div className={classes.Heading}>{props.title}</div>
            <div className={classes.quanity}>
              <div className={classes.QuanityHeading}>Quanity </div>
              <span className={classes.QuanityValue}>{changeInput}</span>
            </div>
            <div className={classes.currentCartItem}>
              <button onClick={decreaseItem} className={classes.minus}>
                -
              </button>
              <button onClick={increaseItem} className={classes.plus}>
                +
              </button>
            </div>
            <div></div>
          </div>
          <div className={classes.priceData}>${props.price}</div>
        </div>
      </div>
      <div></div>
    </Fragment>
  );
}

export default CartItem;
