

import React,{useState,useEffect,useReducer} from 'react'
import classes from './MoviesList.module.css'
import useHttps from '../hooks/useHttps';
import MoviesItems from './MoviesItems';

export default function MoviesList(props) {

    let intialValues={
        listOfMovies:[]
    };
   function moviesListFucntion(state=intialValues,action){
    
    
    if(action.type=="moviesData"){

        let updateData;
        let newList=action.value.map((listOfData)=>{
            return { ...listOfData,watchList:false,id:Math.round( Math.random()*100000) }
        })
        updateData=newList;

        return{
            listOfMovies:updateData
        }
    }
    if(action.type=="NoResultsFound"){
        
        return{ listOfMovies:action.value};

    }
    return{
        listOfMovies:intialValues
    }
   }
    const [moviesList,setMoviesList]=useReducer(moviesListFucntion,intialValues);

   function reponseBody(responseData){
    if(responseData=="No Results Found"){

        setMoviesList({type:"NoResultsFound",value:responseData});
    }
    else{
        setMoviesList({type:"moviesData",value:responseData});
    }
   
   }

    const {requestFunction} =useHttps(reponseBody);

    useEffect(()=>{
        
        requestFunction(props.searchFinalData);
    },[props.searchFinalData])

    if(moviesList.listOfMovies=="No Results Found"){
        return (
            <div className={classes.listOfValues}>
        <div className={classes.NoResultsFound}>
            <div className={classes.noResultsHeading}>No Results Found</div>
        </div>
        </div>)
    }

    if(moviesList.listOfMovies.length==0){
        return (
            <div className={classes.listOfValues}>
        <div className={classes.NoResultsFound}>
            <div className={classes.noResultsHeading}>No Results Found</div>
        </div>
        </div>)
    }
  return (
    <div className={classes.Movies}>
        <div className={classes["col-3-grid"]}>
        {moviesList.listOfMovies.map((data,index)=>{
            return <MoviesItems  itemsData={data}  key={index} keyvalue={index}></MoviesItems>
        })}
        </div>
    </div>
  )
}
