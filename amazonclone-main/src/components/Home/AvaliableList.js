import Card from "../UI/Card";
import classes from "./AvaliableList.module.css";
import AvaliableItem from "./AvaliableItem";
import { Fragment, useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import LoadingSpinner from "../UI/loadingSpinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AvaliableList() {
  const [sotoredData, setStoredData] = useState([]);
  const [fetchAgainData, setFtechAgain] = useState(false);
  function extractingData(data) {
    // console.log(data.products);
    setStoredData(data.products);
  }
  //   console.log("Opening the App file");
  const { isLoading, error, sendRequest: sending } = useHttp();
  //   console.log("IsLoading data" + isLoading);
  //   console.log("Is Error Data " + error);
  //   console.log("SendingRequest Data:" + sending);
  useEffect(() => {
    // console.log("UseEffect is comming into first");
    sending({ url: "https://dummyjson.com/products" }, extractingData);
  }, [sending, fetchAgainData]);

  function fetchAgain() {
    setFtechAgain(true);
  }

  function tosterMessage(){
    toast.error(error)
  }

  if (error) {
    return (
      <div>
        {tosterMessage()}
         <div className={classes.errorModel}>
      <div className={classes.modelData} >
          <h4>Some thing went wrong</h4>
          <button onClick={fetchAgain} className={classes.tryAginButton}>
            Try Again
          </button>
        </div>
        <ToastContainer />
    </div>
      </div>
   
    )
  }

  console.log(isLoading);
  return (
    <Fragment>
      {isLoading && <LoadingSpinner></LoadingSpinner>}
      <div className={classes["col-3-grid"]}>
        {sotoredData.map((values) => {
          return (
            <AvaliableItem
              key={values.id}
              id={values.id}
              title={values.title}
              description={values.description}
              price={values.price}
              thumbnail={values.thumbnail}
            ></AvaliableItem>
          );
        })}
      </div>
      <ToastContainer />
    </Fragment>
  );
}
export default AvaliableList;
