import React, { useState } from 'react'
import classes from "./MoviesItems.module.css"
import {useSelector,useDispatch} from 'react-redux'

export default function MoviesItems(props) {

    const [buttonwatchlist,setButtonWatchList]=useState("Add to WatchList");

    let dipatch=useDispatch();

    function addingtoWatchlistHandler(){

        let newObject={
            ...props.itemsData,
            watchList:true
        }
        // console.log(newObject);
        dipatch({type:"AddingWatchList",value:newObject})
        setButtonWatchList("Added from watchList");
    }


  return (
    <div className={classes.movieItems}  key={props.keyvalue}>
        <div className={classes.borderList}>
            <div className={classes.moviePoster}>
                <img src={props.itemsData.Poster}></img>
            </div>
            <div className={classes.movieName}>
                <button onClick={addingtoWatchlistHandler}> {buttonwatchlist }</button>
            </div>
        </div>
    </div>
  )
}
