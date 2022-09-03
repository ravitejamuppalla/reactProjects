import React, { Fragment } from "react";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutAddress from "../components/checkout/CheckoutAddress";
import OrderItem from "../components/checkout/OrderItem";
import { ClassNames } from "@emotion/react";
import classes from './CheckOut.module.css'
function Checkout() {
  return (
    <Fragment>
      <div className={classes.CheckoutHeader}>
      <CheckoutHeader></CheckoutHeader>
      </div>
     <div className={classes.CheckOutData}>
     <CheckoutAddress></CheckoutAddress>
      <OrderItem></OrderItem>

     </div>
    
    </Fragment>
  );
}

export default Checkout;
