import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CreateTextArea from './components/CreateTextArea';
import Notes from './components/Notes';
import Footer from './components/Footer';
import { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"

let initalValue=true;
function App() {

  let dispatch=useDispatch();
  const cart=useSelector((data)=>data.notes);

  useEffect(()=>{
    async function sendingData(){
      console.log("Entering in method get Effect");
    let response= await fetch("https://reactprojects-81696-default-rtdb.firebaseio.com/notes.json",{
      method:"GET"
    });
    let responseData= await response.json();
    dispatch({type:"InitalData",value:responseData|| []})
  console.log(responseData);
}
sendingData();
  },[])


  useEffect(()=>{
    if(initalValue){
      initalValue=false;
      return;
    }
    async function sendingData(){
      console.log("Entering in method");
    let response= await fetch("https://reactprojects-81696-default-rtdb.firebaseio.com/notes.json",{
    method:"PUT",
    body:JSON.stringify(cart),
  });

    let responseData= await response.json();
}
sendingData();
  },[cart])

  return (
    <div >
      <Header></Header>
      <CreateTextArea></CreateTextArea>
      <Notes></Notes>
      <Footer></Footer>
    </div>
  );
}

export default App;
