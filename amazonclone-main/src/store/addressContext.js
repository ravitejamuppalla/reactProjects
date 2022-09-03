import React, { createContext, useState } from "react";

const addressData = createContext({
  addNewAddressCancel:false,
  address: [],
  addNewAddress: (addressData) => {},
  currentAddress:[],
  currentAddressFunction:(currentAddress)=>{}
});

export const AddressContex = (props) => {
  const [newAddress, setNewAdress] = useState([]);
  const [closeNewAddress,setCloseNewAddress]=useState(false);
  const [currentAddress,setCurrentAddress]=useState([]);

  function currentAddressHandler(value){
    setCurrentAddress(value);
  }
  function addingNewAddressHandler(value) {
    setNewAdress((oldvalue) => oldvalue.concat(value));
  }

  function closeNewAddressHandler(){
    setCloseNewAddress((values)=>!values);
  }
  return (
    <addressData.Provider
      value={{
        addNewAddressCancel:closeNewAddress,
        address: newAddress,
        addNewAddress: addingNewAddressHandler,
        closeOrOpenNewAddress:closeNewAddressHandler,
        currentAddressFunction:currentAddressHandler,
        currentAddress:currentAddress
      }}
    >
      {props.children}
    </addressData.Provider>
  );
};
export default addressData;
