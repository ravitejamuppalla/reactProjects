
import React,{Fragment,useState} from 'react'
import {Paper,TextField} from "@mui/material"

export default function SearchBar(props) {

    const [searchTerm,setSearchTerm]=useState("");

    function handlerChange(e){
        setSearchTerm(e.target.value)
    }
    function onkeyPressHandler(event){

       if( event.key==="Enter"){
        props.sendingSearchTerm(searchTerm);
        setSearchTerm("");
       }
    }

  return (
    <Fragment>
        <Paper elevation={10} style={{padding:"25px"}}>
            <TextField fullWidth label="Search" onChange={handlerChange} onKeyPress={onkeyPressHandler} value={searchTerm}>

            </TextField>

        </Paper>
    </Fragment>
  )
}
