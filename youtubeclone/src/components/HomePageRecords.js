

import React,{Fragment, useState} from 'react'
import {Grid,Typography} from '@mui/material';
import classes from "./HomePageRecords.module.css";
import VideoDetail from './VideoDetail';

export default function HomePageRecords(props) {
   
   function selectingVideoHanlder(e){
    e.preventDefault();
    console.log(props);
    props.videoDetail(props);
    }
    
  return (
    <Fragment>
        
            <div>
                <img onClick={selectingVideoHanlder} src={props.thumbnailsData.url}></img>
                <div className={classes.title}>{props.title}</div>
               <div className={classes.channelTitle}>{props.channelTitle}</div>
            </div>
    </Fragment>
  )
}
