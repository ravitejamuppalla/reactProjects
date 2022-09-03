

import React,{Fragment, useState} from 'react'
import classes from "./CreateTextArea.module.css"
import AddIcon from '@mui/icons-material/Add';
import {Fab} from '@mui/material'
import {useSelector,useDispatch} from "react-redux"

export default function CreateTextArea() {
    const [openTitle,setOpenTitle]=useState(false);

    const dispatch=useDispatch();
    const [inputNote,setInputNote]=useState({
        title:"",
        content:""
    })

   function onchangeHandler(event){
    const {name,value}=event.target;
    setInputNote((inputvalues)=>{
        return {
            ...inputvalues,
            [name]:value,
           
        }
    });

   }
   function onsubmitHandler(){
    const sendingID={
        ...inputNote,
        id:Math.round(Math.random()*100000)
    }
     console.log(sendingID);
    dispatch({type:"Add",value:sendingID})
    setInputNote({
        title:"",
        content:""
    })
   }

   function opentitleHandler(){
    setOpenTitle(true);
   }
  return (
    <Fragment>
        <div>
        <form className={classes.contentArea}>
                {openTitle && <input placeholder='Title' type="Text" onChange={onchangeHandler}  name ="title" value={inputNote.title}></input>}
                <textarea onClick={opentitleHandler} placeholder="Take a note" name="content" onChange={onchangeHandler} value={inputNote.content} ></textarea>
                <Fab onClick={onsubmitHandler}>
                <AddIcon></AddIcon>
                </Fab>
                
        </form>
        </div>
    </Fragment>
  )
}
