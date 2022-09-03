

import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import classes from './OrderItem.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OrderItem() {
    const history=useHistory();

  function  orderHandler(){
    // history.replace("/Home");
    toast.success("order placed successfully  ");
  }

  function cancelOrder(){
    history.replace("/Home");
  }

  return (
   <div className={classes.orderBox}>
        <div className={classes.orderSummary}>
            <div className={classes.orderSummaryHeading}>Order Summary</div>
            <div className={classes.items}>
                <div className={classes.itemsHeading}>Items:</div>
                <div>$3544.33</div>
            </div>
            <div className={classes.items}>
                <div className={classes.deviveryHeading}>Delivery:</div>
                <div>$00.00</div>
            </div>
            <div className={classes.singleLine}> </div>
            <div className={classes.orderTotal}>
                <div className={classes.orderHeading}>Order Total</div>
                <div className={classes.orderTotalAmount}>$333.33</div>
            </div>
            <div className={classes.singleLine}> </div>
            <div className={classes.orderData}>
            <button className={classes.cancelOrder} onClick={cancelOrder}>Cancel</button>
            <button className={classes.orderItem} onClick={orderHandler}>Order</button>
            <ToastContainer />
            </div>
           
        </div>
       
   </div>
  )
}
