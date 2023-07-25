import { PropaneSharp } from "@mui/icons-material";
import React, { Fragment } from "react";
import classes from "./Model.module.css";
import ReactDom from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModelOverLay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}
const overlayValue = document.getElementById("Overlay");

function Model(props) {
  console.log("Entering in to the model");
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop></Backdrop>, overlayValue)}
      {ReactDom.createPortal(
        <ModelOverLay>{props.children}</ModelOverLay>,
        overlayValue
      )}
    </Fragment>
  );
}
export default Model;
