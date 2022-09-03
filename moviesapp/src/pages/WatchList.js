import WatchItems from '../components/WatchItems'
import MoviesHeader from '../components/MoviesHeader'

import React, { useState } from 'react'

export default function WatchList() {

   let moviesHeader="Movies";
   function searchResultsData(data){
    
}
  return (
    <React.Fragment>
          <MoviesHeader movieHead={moviesHeader} searchResults={searchResultsData}></MoviesHeader>
        <WatchItems></WatchItems>
    </React.Fragment>
  )
}
