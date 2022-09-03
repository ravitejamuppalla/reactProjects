
import React,{useState,useReducer} from 'react'
import useHttps from '../hooks/useHttps';
import { getRequest } from '../api/youtube';
import {useEffect} from "react";
import {Grid} from '@mui/material';
import SearchBar from './SearchBar';
import HomePageRecords from './HomePageRecords';
import LoadingSpinner from '../UI/loadingSpinner';
import VideoDetail from './VideoDetail';

export default function HomePage() {

    // const [WholeData,dispathData]=useReducer(reducerFucntion,intitalFucntion);
    // const [WholeData,dispathData]=useReducer([]);
    const [searchData,setSearchData]=useState("");
    const [isVideoDetail,setIsVideoDetail]=useState(false);
 
  const {sendRequest,status,data,error}= useHttps(getRequest);
    const [videoDetails,setVideoDetails]=useState({});

  function onVideoHandler(data){
    setVideoDetails(data);
    setIsVideoDetail(true);
  }


  function searching(data){
    setSearchData(data);
    sendRequest({searchURL:"search",searchTerm:data});

  }
    useEffect(()=>{
      sendRequest({searchURL:"search",searchTerm:"EnglishMovies"});

    },[])

   console.log(status);

   if(status=="pending"){
    return (<LoadingSpinner></LoadingSpinner>)
   }

   if(error){
    return (<h1>Please Reload the Application</h1>)
   }

   if(status=="completed" && data.length==0){
    return <h1>No Results Found</h1>
   }

   if(status=="completed" && data.length!==0){

    return (
        <div>
            <Grid container >
                <Grid item xs={12}>
                     <SearchBar sendingSearchTerm={searching} ></SearchBar>
                </Grid>
                { !isVideoDetail && <div className="col-4-grid" >
                        {data.map((eachValue)=>{
                        return  <HomePageRecords videoDetail={onVideoHandler} decription={eachValue.snippet.description} videoId={eachValue.id.videoId} title={eachValue.snippet.title} thumbnailsData={eachValue.snippet.thumbnails.medium} channelTitle={eachValue.snippet.channelTitle} ></HomePageRecords> 
            
                        })}
                 </div>}

                 { isVideoDetail && <VideoDetail title={videoDetails.title} channelTitle={videoDetails.channelTitle} videoID={videoDetails.videoId} decription={videoDetails.decription}></VideoDetail>}

           </Grid>
          
    
        </div>
      )
   }
    


  
}
