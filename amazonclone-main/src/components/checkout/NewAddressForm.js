import React, { useEffect, useContext,useState, useRef } from "react";
import Model from "../UI/Model";
import classes from "./NewAddressForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import useHttp from "../../hooks/useHttp";
import addressData from "../../store/addressContext";

function NewAddressForm() {

  const cntx=useContext(addressData);
  const countryNameref = useRef();
  const cityNameref = useRef();
  const [firstName,setFirstName]=useState("");
  const [firstNameIsValid,setFirstNameIsValid]=useState(false);

  const [countriesList, setCountriesList] = useState([]);
  const [wholeListData, setWholeListData] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [mobileNumber,setMobileNumber]=useState("");
  const [pinCode,setPinCode]=useState("");
  const [houseAddress,setHouseAddress]=useState("");
  const [houseAddressArea,setHouseAddressArea]=useState("");
  const [landmark,setLandmark]=useState("");

 

  useEffect(()=>{
    const pattern=/^[a-z ,.'-]+$/; 
    if(pattern.test(firstName)){
      setFirstNameIsValid(true);
    }
  },[firstName])

  let countryData;
  let countriesListbefore;
  const extractingData = (data) => {
    countryData = data.data;
    setWholeListData(countryData);
    countriesListbefore = countryData.map((data) => {
      return data.country;
    });
    setCountriesList(countriesListbefore);
  };

  function gettingCountryNameHandler(e) {
    const countryName = countryNameref.current.value;
    const cities = wholeListData
      .filter((value) => value.country === countryName)
      .map((values) => values.cities);
    setCityList(cities[0]);
  }

  function firstNameHandler(event){

    let firstNameValue=event.target.value;
    setFirstName(firstNameValue);
    
  }

  function cancelHandler(){
    cntx.closeOrOpenNewAddress();
  }

  function mobileNumberHandler(e){
    setMobileNumber(e.target.value)

  }
  function pincodeHandler(e){
    setPinCode(e.target.value)

  }
  function houseAddressHandler(e){
    setHouseAddress(e.target.value)

  }
  function houseAddressAreaHandler(e){
    setHouseAddressArea(e.target.value)

  }
  function landmarkHandler(e){
    setLandmark(e.target.value)

  }

  function addingAddressHandler(e){
    e.preventDefault();
    let addressWholeData={
      id:Math.round( Math.random()*100000000),
      countryName:countryNameref.current.value,
      firstName:firstName,
      mobileNumber:mobileNumber,
      pinCode:pinCode,
      houseAddress:houseAddress,
      houseAddressArea:houseAddressArea,
      landmark:landmark,
      cityName:cityNameref.current.value

    }
    cntx.closeOrOpenNewAddress();

    cntx.addNewAddress(addressWholeData);
  }
 

  const { isLoading, error, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(
      { url: "https://countriesnow.space/api/v0.1/countries" },
      extractingData
    );
  }, [sendRequest]);

  return (
    <Model>
      <form className={classes.formCard} >
        <div className={classes.newAddressHeading}>
          <span>Enter a new delivery address</span>
          <CloseIcon onClick={cancelHandler} className={classes.closeIcon}></CloseIcon>
        </div>
        <div className={classes.newAddress}>
          <span>Add a new address</span>
        </div>
        <div className={classes.addAddressPopOver}>
          <div className={`${classes.formFields}`}>
            <label>Country/Region</label>
            <select
              ref={countryNameref}
              onChange={gettingCountryNameHandler}
              name="countries"
              id={classes.country}
            >
              {countriesList.map((values, i) => {
                return (
                  <option key={i} value={values}>
                    {values}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Full Name</label>
            <input type="text" onChange={firstNameHandler}></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Mobile number</label>
            <input type="text" onChange={mobileNumberHandler}></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Pincode</label>
            <input type="text" onChange={pincodeHandler}></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Flat, House no., Building, Company, Apartment</label>
            <input type="text" onChange={houseAddressHandler}></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Area, Street, Sector, Village</label>
            <input type="text" onChange={houseAddressAreaHandler}></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Landmark</label>
            <input type="text" onChange={landmarkHandler}></input>
          </div>

          <div className={`${classes.formFields}`}>
            <label>Town/City</label>
            <select ref={cityNameref} name="cities" id={classes.City}>
              {cityList.map((values, i) => {
                return (
                  <option key={i} value={values}>
                    {values}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={classes.buttons}>
            <button  onClick={cancelHandler} className={`${classes.button} ${classes.cancel}`}>
              Cancel
            </button>
            <button onClick={addingAddressHandler} className={`${classes.button} ${classes.adding}`}>
              ADD
            </button>
          </div>
        </div>
      </form>
    </Model>
  );
}
export default NewAddressForm;
