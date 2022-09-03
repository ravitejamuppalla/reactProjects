import React, { useState,Fragment } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import classes from "./HomePage.module.css"
import {useSelector,useDispatch} from 'react-redux'
import { isAuthenticated } from '../store';

const clientId = "463540379846-jqhjmqk4392dhq24ja6f9hi0puaqsh5a.apps.googleusercontent.com";

function HomePage() {

  
    let dispatch=useDispatch();


    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        dispatch(isAuthenticated.setSignedIn(true));
        dispatch(isAuthenticated.setUserData(res.profileObj))
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };


    return (
        <Fragment>
            <div className={classes.HomePageLogin}>
            <h2>📗</h2>
            <h1>A Readers favourite place!</h1>
            <p>
                We provide high quality online resource for reading blogs. Just sign
                up and start reading some quality blogs.
            </p>
            {
               <GoogleLogin
               clientId="463540379846-jqhjmqk4392dhq24ja6f9hi0puaqsh5a.apps.googleusercontent.com"
               render={(renderProps) => (
                 <button
                   onClick={renderProps.onClick}
                   disabled={renderProps.disabled}
                   className={classes.login__button}
                 >
                   Login with Google
                 </button>
               )}
               onSuccess={onLoginSuccess}
               onFailure={onLoginFailure}
               isSignedIn={true }
               cookiePolicy={"single_host_origin"}
             />}

            </div>
        </Fragment>
    );
}
export default HomePage;