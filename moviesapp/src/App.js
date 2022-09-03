
import './App.css';
import {Link,Route} from "react-router-dom"
import Movies from './pages/Movies';
import React,{Fragment} from 'react';
import WatchList from './components/WatchItems';

function App() {
  return (

    <Fragment>
      <Route path='/Prime'>
          <Movies></Movies>
      </Route>
      <Route path="/WatchList">
        <WatchList></WatchList>
      </Route>
    </Fragment>

      
    
   
  );
}

export default App;
