import React,{Fragment} from 'react'
import HighlightIcon from '@mui/icons-material/Highlight';
import classes from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
        <div className={classes.Header}>
        <HighlightIcon className={classes.HighlightIcon}></HighlightIcon>
        <div className={classes.HeaderHeading}>To Do List</div>
        </div>
    </Fragment>
  )
}
