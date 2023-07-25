import React, { Fragment } from "react";
import CartList from "../components/Cart/CartList";
import Footer from "../components/Home/Footer";
import Header from "../components/Headers/Header";
function Cart() {
  return (
    <Fragment>
      <Header></Header>
      <CartList></CartList>
      <Footer></Footer>
    </Fragment>
  );
}
export default Cart;
