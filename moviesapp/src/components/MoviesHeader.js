import React from 'react'
import { Route } from 'react-router-dom'
import classes from './MoviesHeader.module.css'
import SearchBox from './SearchBox'
import { useHistory } from 'react-router-dom'

export default function MoviesHeader(props) {
    const history=useHistory();
    function myStuffHandler(){
        history.replace("/WatchList");
    }

    function searchResultsData(data){
       props.searchResults(data)
    }

  return (
    <div className={classes.MainHeader}>
        <div className={classes.Header}>
        <div className={classes.headerHeadingheader}>
                {props.movieHead}
        </div>
        
        <div className={classes.leftSideFlex}>
            <h3 onClick={myStuffHandler}>My Stuff</h3>
            <SearchBox searchedResults={searchResultsData}></SearchBox>
           
        </div>
        </div>

    </div>
  )
}
