import React from "react";
import classes from "./CheckoutHeader.module.css";
import HelpIcon from "@mui/icons-material/Help";

function CheckoutHeader() {
  return (
    <div className={classes.checkoutHeader}>
      <div className={classes.amazonImg}>
        <img
          className={classes.amazonimages}
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
        ></img>
      </div>
      <div className={classes.checkoutHeading}>
        <span>Checkout</span>
      </div>
      <div className={classes.nav_Help}>
        <HelpIcon className={classes.HelpIcon}></HelpIcon>
      </div>
    </div>
  );
}
export default CheckoutHeader;
