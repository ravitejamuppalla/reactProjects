import { Fragment } from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <Fragment>
      <div className={`${classes.footer}`}>
        <div className={classes.footerData}>
          <div>Get to Know Us</div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Press Releases</div>
          <div>Amazon Cares</div>
          <div>Amazon Science</div>
        </div>
        <div className={classes.footerData}>
          <div>Connect with Us</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Instagram</div>
        </div>
        <div className={classes.footerData}>
          <div>Make Money with Us</div>
          <div>Sell on Amazon</div>
          <div>Sell under Amazon Accelerator</div>
          <div>Amazon Global Selling</div>
          <div>Become an Affiliate</div>
          <div>Fulfilment by Amazon</div>
          <div>Advertise Your Products</div>
          <div>Amazon Pay on Merchants</div>
        </div>
        <div className={classes.footerData}>
          <div>Let Us Help You</div>
          <div>COVID-19 and Amazon</div>
          <div>Your Account</div>
          <div>Returns Centre</div>
          <div>100% Purchase Protection</div>
          <div>Amazon App Download</div>
          <div>Amazon Assistant Download</div>
          <div>Help</div>
        </div>
      </div>
      <div className={`${classes.copyRight}`}>
        <div>
          Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 2022-2030,
          Ravitejamuppalla5120@gmail.com, Inc. or its affiliates
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
