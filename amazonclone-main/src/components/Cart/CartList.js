import { Fragment } from "react";
import CartItem from "./CartItem";
import classes from "./CartList.module.css";
import { useContext } from "react";
import cartItems from "../../store/cart-context";
import { Link,useHistory } from "react-router-dom";

function CartList() {

  const history = useHistory();
  const cntx = useContext(cartItems);

  const totalAmount = cntx.totalPrice.toFixed(2);

  const extractingData = cntx.cartItems.map((values) => {
    return (
      <CartItem
        key={values.id}
        id={values.id}
        title={values.title}
        thumbnail={values.thumbnail}
        price={values.price}
        itemAddedToCart={values.itemAddedToCart}
      ></CartItem>
    );
  });
  if (extractingData.length == 0) {
    return (
      <section className={classes.CartItemEmpty}>
        <h1 className={classes.cartEmpty}>Your Amazon Cart is empty.</h1>
      </section>
    );
  }

  function proceesToBuyHandler(){
    history.replace("/Checkout");
  }

  return (
    <Fragment>
      <section className={classes.Cart}>
        <div className={classes.CartList}>
          <div className={classes.cartItem}>
            <h3> Shopping Cart</h3>
            {extractingData}
          </div>
          <div className={classes.subTotal}>
            <div className={classes.subTotalHeading}>
              <div className={classes.SubTotalHead}>Subtotal</div>
              <div className={classes.totalItems}>
                ({cntx.totalItems} items):
              </div>
            </div>
            <div className={classes.totalAmount}>${totalAmount}</div>
          </div>
        </div>
        <div className={classes.totalAmountValue}>
          <div>
            Subtotal ({cntx.totalItems} items): ${totalAmount}
          </div>
          <button onClick={proceesToBuyHandler} className={classes.ProccedToBuy}>Proceed to Buy</button>
        </div>
      </section>
    </Fragment>
  );
}

export default CartList;
