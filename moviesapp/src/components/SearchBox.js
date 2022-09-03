
import React from 'react'
import classes from './SearchBox.module.css'

export default function SearchBox(props) {
     

    function searchResultsHandler(e){

        props.searchedResults(e.target.value);

    }
  return (
    <React.Fragment>
         <input onChange={searchResultsHandler} type="text" id={classes.searchInput} placeholder="Search for Movies.."></input>
    </React.Fragment>
  )
}
