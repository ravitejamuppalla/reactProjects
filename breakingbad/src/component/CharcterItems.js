import React, { Fragment } from "react";
import classes from "./CharcterItems.module.css";

export default function CharcterItems(props) {
  const apiData = props.wholeObject;
  console.log(apiData);
  return (
    <Fragment>
      <div className={classes.card}>
        <div className={classes.cardinner}>
          <div className={classes.cardfront}>
            <img src={apiData.img} alt="Image" />
          </div>
          <div className={classes.cardBack}>
            <h1>{apiData.name}</h1>

            <ul>
              <li>
                <strong>Actor Name :</strong>
                {apiData.portrayed}
              </li>
              <li>
                <strong>Nick Name :</strong>
                {apiData.nickname}
              </li>
              <li>
                <strong>Birthday:</strong>
                {apiData.birthday}
              </li>
              <li>
                <strong>Status: </strong>
                <span
                  style={{
                    color: apiData.status === "Alive" ? "green" : "red",
                  }}
                >
                  {apiData.status}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
