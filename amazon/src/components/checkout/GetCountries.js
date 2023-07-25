import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import useHttp from "../../hooks/useHttp";

function GetCountries() {
  let countryData = [];
  let countriesList;
  const extractingData = (data) => {
    countryData = data.data.map((values) => {
      return values.country;
    });
    countriesList = countryData.map((countries) => (
      <div value={countries}>countries</div>
    ));
    // console.log(countriesList);
  };
  const { isLoading, error, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(
      { url: "https://countriesnow.space/api/v0.1/countries" },
      extractingData
    );
  }, [sendRequest]);
  return countriesList;
}

export default GetCountries;
