import React, { useState } from 'react'
import classes from "./WatchList.module.css"
import {useSelector,useDispatch} from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';


export default function WatchList() {
    let history=useHistory();

   let mystuff= useSelector((data)=>data.myWatchList)

    
    let dipatch=useDispatch();

    function removeFromWatchlistHandler(e){
        dipatch({type:"RemoveWatchList",value:e.target.value})
    }
    console.log(mystuff);

    // console.log(mystuff.myWatchList);
    function backtoSearchHandler(){

        history.replace("/Prime");

    }

    if(mystuff.length==0){
        return (
            <div>
                 <div className={classes.MainHeader}>
            <div className={classes.Header}>
                <div className={classes.backToResults} >

                <ArrowBackIcon className={classes.arrowIcon} onClick={backtoSearchHandler} ></ArrowBackIcon>
                <div className={classes.headerHeadingheader}>Back to search</div>
                </div>
            </div>
        </div>
                <div className={classes.listOfValues}>
                        <div className={classes.NoResultsFound}>
                            <div className={classes.noResultsHeading}>No watchList</div>
                        </div>
                 </div>
            </div>
        )
    }
 

  return  (
    
    <div className={classes.Movies}>
         <div className={classes.MainHeader}>
            <div className={classes.Header}>
                <div className={classes.backToResults} >

                <ArrowBackIcon className={classes.arrowIcon} onClick={backtoSearchHandler} ></ArrowBackIcon>
                <div className={classes.headerHeadingheader}>Back to search</div>
                </div>
            </div>
        </div>

        <div className={classes["col-3-grid"]}>
       { mystuff.map((data,index)=>{return  <div className={classes.movieItems}  key={index}>
                        <div className={classes.borderList}>
        <div className={classes.moviePoster}>
            <img src={data.Poster}></img>
        </div>
        <div className={classes.movieName}>
            <button onClick={removeFromWatchlistHandler} value={data.id}>Remove</button>
        </div>
    </div>
        </div>})}
        </div>
    </div>
  )
  

   
  
}
