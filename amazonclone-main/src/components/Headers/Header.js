import React, { useContext } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import cssClasses from "./Header.module.css";
import cartItems from "../../store/cart-context";
import { useHistory } from "react-router-dom";

function Header() {
  const cntx = useContext(cartItems);
  const history = useHistory();

  function openingCardHandler() {
    history.replace("/Cart");
  }

  function navigateToHomePage() {
    history.replace("/Home");
  }
  return (
    <div className={cssClasses.header}>
      <div onClick={navigateToHomePage} className={cssClasses.header__logo}>
        <a className={cssClasses.header__logoTitle}>amazon.in</a>
      </div>
      <div className={cssClasses.header__search}>
        <input type="text" className={cssClasses.header__searchInput}></input>
        <SearchIcon className={cssClasses.header__searchIcon}></SearchIcon>
      </div>
      <div className={cssClasses.header__nav}>
        <div className={cssClasses.nav__item}>
          <span className={cssClasses.nav__itemLineOne}>Hello Guest</span>
          <span className={cssClasses.nav__itemLineTwo}>Sign In</span>
        </div>
        <div className={cssClasses.nav__item}>
          <span className={cssClasses.nav__itemLineOne}>Your</span>
          <span className={cssClasses.nav__itemLineTwo}>Shop</span>
        </div>
        <div onClick={openingCardHandler} className={cssClasses.nav__item}>
          <ShoppingBasketIcon
            className={cssClasses.nav__itemBasket}
          ></ShoppingBasketIcon>
          <span
            className={`${cssClasses.nav__itemLineTwo} ${cssClasses.nav__basketCount}`}
          >
            {cntx.totalItems}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
