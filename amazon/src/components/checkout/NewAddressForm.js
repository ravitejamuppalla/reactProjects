import React, { useEffect, useState, useRef } from "react";
import Model from "../UI/Model";
import classes from "./NewAddressForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import useHttp from "../../hooks/useHttp";

function NewAddressForm() {
  const countryNameref = useRef();
  const [countriesList, setCountriesList] = useState([]);
  const [wholeListData, setWholeListData] = useState([]);
  const [cityList, setCityList] = useState([]);
  let countryData;
  let countriesListbefore;
  const extractingData = (data) => {
    countryData = data.data;
    setWholeListData(countryData);
    countriesListbefore = countryData.map((data) => {
      return data.country;
    });
    console.log(countryData);
    setCountriesList(countriesListbefore);
  };

  function gettingCountryNameHandler(e) {
    console.log("Entering inot Country Name handler");
    const countryName = countryNameref.current.value;
    console.log(countryName);
    const cities = wholeListData
      .filter((value) => value.country === countryName)
      .map((values) => values.cities);
    setCityList(cities[0]);
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
      <form className={classes.formCard}>
        <div>Afghanistan</div>
        <div className={classes.newAddressHeading}>
          <span>Enter a new delivery address</span>
          <CloseIcon className={classes.closeIcon}></CloseIcon>
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
            <input type="text"></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Mobile number</label>
            <input type="text"></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Pincode</label>
            <input type="text"></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Flat, House no., Building, Company, Apartment</label>
            <input type="text"></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Area, Street, Sector, Village</label>
            <input type="text"></input>
          </div>
          <div className={`${classes.formFields}`}>
            <label>Landmark</label>
            <input type="text"></input>
          </div>

          <div className={`${classes.formFields}`}>
            <label>Town/City</label>
            <select name="cities" id={classes.City}>
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
            <button className={`${classes.button} ${classes.cancel}`}>
              Cancel
            </button>
            <button className={`${classes.button} ${classes.adding}`}>
              ADD
            </button>
          </div>
        </div>
      </form>
    </Model>
  );
}
export default NewAddressForm;
