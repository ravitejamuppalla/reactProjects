import React, { createContext, useReducer } from "react";

const cartItems = createContext({
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  addingItems: (item) => {},
  removingItems: (item) => {},
});
const intialValues = { cartItems: [], totalItems: 0, totalPrice: 0 };
const reducerFunction = (state, action) => {
  if (action.type === "ADDITEM") {
    console.log(+state.totalItems);
    console.log(+action.val.itemAddedToCart);
    let totalItemsValue = +state.totalItems + +action.val.itemAddedToCart;
    let totalPriceValue = state.totalPrice + +action.val.price;
    let findingDuplicateItem = state.cartItems.findIndex(
      (data) => data.id === action.val.id
    );
    let updatedItems;
    let duplicateValues = state.cartItems[findingDuplicateItem];
    if (duplicateValues) {
      let updatedItem = {
        ...duplicateValues,
        itemAddedToCart:
          +duplicateValues.itemAddedToCart + +action.val.itemAddedToCart,
      };
      updatedItems = [...state.cartItems];
      updatedItems[findingDuplicateItem] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.val);
    }
    console.log(updatedItems);
    return {
      cartItems: updatedItems,
      totalItems: totalItemsValue,
      totalPrice: totalPriceValue,
    };
  }
  if (action.type === "REMOVEITEM") {
    let totalItemsValue = +state.totalItems - +action.val.itemAddedToCart;
    let totalPriceValue = state.totalPrice - +action.val.price;
    let findingDuplicateItem = state.cartItems.findIndex(
      (data) => data.id === action.val.id
    );
    let updatedItems;
    let duplicateValues = state.cartItems[findingDuplicateItem];

    if (duplicateValues.itemAddedToCart == 1) {
      updatedItems = state.cartItems.filter((value) => {
        return value.id !== action.val.id;
      });
    } else {
      let updatedItem = {
        ...duplicateValues,
        itemAddedToCart:
          +duplicateValues.itemAddedToCart - +action.val.itemAddedToCart,
      };
      updatedItems = [...state.cartItems];
      updatedItems[findingDuplicateItem] = updatedItem;
    }
    return {
      cartItems: updatedItems,
      totalItems: totalItemsValue,
      totalPrice: totalPriceValue,
    };
  }

  return intialValues;
};

export const CartItemsProvider = (props) => {
  const [cartItemsValue, setCartItemsValue] = useReducer(
    reducerFunction,
    intialValues
  );
  function addItemHandler(values) {
    setCartItemsValue({ type: "ADDITEM", val: values });
  }
  function removeItemHandler(values) {
    setCartItemsValue({ type: "REMOVEITEM", val: values });
  }
  return (
    <cartItems.Provider
      value={{
        cartItems: cartItemsValue.cartItems,
        addingItems: addItemHandler,
        removingItems: removeItemHandler,
        totalItems: cartItemsValue.totalItems,
        totalPrice: cartItemsValue.totalPrice,
      }}
    >
      {props.children}
    </cartItems.Provider>
  );
};

export default cartItems;
