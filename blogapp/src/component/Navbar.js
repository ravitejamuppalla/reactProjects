

import React,{useState} from 'react'
import classes from './Navbar.module.css'
import {Avatar} from "@mui/material"
import {GoogleLogout} from "react-google-login"
import {useSelector,useDispatch} from "react-redux"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { isAuthenticated } from '../store'
import { blogDetails } from '../store'


export default function Navbar() {
    let dispatch=useDispatch();
    let isSignIn=useSelector((data)=>data.auth.isSignedIn);

    let userDetails=useSelector((data)=>data.auth.userData);

    let blogSearch=useSelector((data)=>data.blog.searchInput);

    console.log("The searchData"+useSelector((data)=>data.blog.searchInput));

    const [searchText,setSearchText]=useState("");

    function onInputChangeHandler(event){

        let inputText=event.target.value;
        setSearchText(inputText);
    }

    function onSearchHandler(){
        dispatch(blogDetails.setSearchInput(searchText));
        setSearchText("");
    }

    function onKeyPressHandler(e){

        if(e.key==="Enter"){
            dispatch(blogDetails.setSearchInput(searchText));
            setSearchText("");
        }
    }

    const onSignoutSuccess = () => {
        console.log("You have been logged out successfully");
        dispatch(isAuthenticated.setUserData(null));
        dispatch(isAuthenticated.setSignedIn(false));
    };


  return (
    <div className={classes.navbar}>
    <div className={classes.navbar__header}>
    BlogMania 💬
    </div>
   { isSignIn && <div className={classes.blog__search}>
        <input input="text" onKeyPress={onKeyPressHandler} className={classes.search} onChange={onInputChangeHandler} value={searchText}></input>
        <button className={classes.submit} onClick={onSearchHandler}>Search</button>
    </div>
    }
 <div  className={classes.navbar__user__data}>
 { isSignIn && <div className={classes.logoutDeatils}>
            <div>   
                <Avatar alt="Login Success" src={userDetails? userDetails.imageUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}></Avatar>
            </div>
            <GoogleLogout
                clientId="463540379846-jqhjmqk4392dhq24ja6f9hi0puaqsh5a.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className={classes.logout__button}
                    >
                      LogOut
                    </button>
                  )}
                onLogoutSuccess={onSignoutSuccess}
                >
            </GoogleLogout> 
            </div>
}
    
       {!isSignIn && <div className={classes.NotLoginApp}>
            Login to App 
        </div>
        }   

    </div>
</div>
  )
}
