
import React from 'react'
import classes from "./Notes.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux"
import {Fab} from "@mui/material"
import {useDispatch}  from "react-redux"

export default function Notes() {
    const dispatch=useDispatch();
  function  deleteHandler(idValue){
    dispatch({type:"Remove",value:idValue})

    }

    const notesData=useSelector((data)=>data);
        if(notesData){
           return notesData.notes.map((data,index)=>{
                 return (
                    <div className={classes.cardNotes} key={data.id}>
                        <div className={classes.title}>
                            {data.title}
                        </div>
                        <div className={classes.content}>
                           {data.content}
                        </div>
                        <button  onClick={() =>deleteHandler(data.id) } >
                        <DeleteIcon ></DeleteIcon>
                        </button>
                    </div>
              )
            })
        }

       
  
}
