import React, { Fragment, useContext, useState } from "react";
import classes from "./CheckoutAddress.module.css";
import addressData from "../../store/addressContext";
import Model from "../UI/Model";
import NewAddressForm from "./NewAddressForm";
import AddingAddress from "./AddingAddress";

function CheckoutAddress() {
  const [noAddressFound,setNoAddressFound]=useState(false)
  const cntrx = useContext(addressData);
  let totalAddress = cntrx.address;
  let addresData;
 
  function addNewAddressHandler() {
    cntrx.closeOrOpenNewAddress();
  }
  return (
    <Fragment>
      <div className={classes.checkoutAddress}>
        <div className={classes.AddressHeading}>
          <div className={classes.selectAddressHeading}>
            Select a delivery address
          </div>
          <div className={classes.newAddressButton}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/addAddress._CB454652023_.png"
              alt="Plus Symbol"
            />
            <div onClick={addNewAddressHandler}>Add New Address</div>
          </div>
        </div>
        <div className={classes.borderBottomLine}></div>
        <div >
        {totalAddress.length == 0 ? <p className={`${classes.addedItems} ${classes.NoAddressFound}`}>No Address Found</p> : <AddingAddress></AddingAddress>}
        </div>
      </div>
      {cntrx.addNewAddressCancel && <NewAddressForm></NewAddressForm>}
      
    </Fragment>
  );
}

export default CheckoutAddress;
