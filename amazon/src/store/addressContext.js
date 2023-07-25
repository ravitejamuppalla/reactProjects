import React, { createContext, useState } from "react";

const addressData = createContext({
  address: [],
  addNewAddress: (addressData) => {},
});

export const AddressContex = (props) => {
  const [newAddress, setNewAdress] = useState([]);
  function addingNewAddressHandler(value) {
    setNewAdress((oldvalue) => oldvalue.concat(value));
  }
  return (
    <addressData.Provider
      value={{
        address: newAddress,
        addNewAddress: addingNewAddressHandler,
      }}
    >
      {props.children}
    </addressData.Provider>
  );
};
export default addressData;
