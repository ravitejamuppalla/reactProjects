

import React,{useContext,useState} from 'react'
import classes from './addingAddress.module.css';
import addressData from '../../store/addressContext';

function AddingAddress() {
    const cntxdata=useContext(addressData);
     function inputonchangehandler(e){
        
        const addressSelected=cntxdata.address.filter((data)=>e.target.value==data.id);
        cntxdata.currentAddressFunction(addressSelected[0]);
    }
  return (
    <div className={classes.addressList}>
        {cntxdata.address.map((data,index)=>{
            let addingColour="";
            if(cntxdata.currentAddress.id==data.id) addingColour=classes.onclicRadioButton
             return ( 
                    <div className={`${classes.selectAddress} ${addingColour}`} key={index}  >
                        <input type="checkbox" checked={cntxdata.currentAddress.id==data.id} value={data.id} onChange={inputonchangehandler}></input>
                        <div>
                        <span className={classes["bold-text"]}>{data.firstName}, </span>
                        <span className={classes.breakword}>{data.houseAddress},{data.houseAddressArea},{data.landmark},{data.pinCode},{data.cityName},{data.countryName}, Phone number:  {data.mobileNumber}</span>
                        </div>
                    </div>
          )
})}
      
      
    </div>
  )
}

export default AddingAddress;