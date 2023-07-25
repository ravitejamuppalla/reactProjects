import React, { Fragment } from "react";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutAddress from "../components/checkout/CheckoutAddress";
function Checkout() {
  return (
    <Fragment>
      <CheckoutHeader></CheckoutHeader>
      <CheckoutAddress></CheckoutAddress>
    </Fragment>
  );
}

export default Checkout;
