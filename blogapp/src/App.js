import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import {useEffect} from 'react'
import {gapi} from "gapi-script"
import Navbar from './component/Navbar';
import {useSelector} from "react-redux";
import BlogPage from './component/BlogPage';

function App() {

    let isSignIn=useSelector((data)=>data.auth.isSignedIn);
    console.log(isSignIn);

      useEffect(()=>{
        window.gapi.load('client:auth2', () => {
          window.gapi.client.init({
              clientId: '716075642837-kergfh0638hu8iq5dimpgnlc1f08s61r.apps.googleusercontent.com',
              scope: 'email',
              plugin_name: 'streamy'
          }).then(() => {
              
          });
      });
      },[])
  
  return (
    <div >
      <Navbar></Navbar>
     {!isSignIn && <HomePage />}
     {isSignIn && <BlogPage></BlogPage>}
  </div>
  );
}

export default App;
