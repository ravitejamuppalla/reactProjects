import MoviesList from "../components/MoviesList";
import MoviesHeader from "../components/MoviesHeader";

import React, { useState } from 'react'

export default function Movies() {
    const [searchResults,setSearchResults]=useState("");

    let moviesHeader="Movies"

    function searchResultsData(data){
        setSearchResults(data)
    }
  return (
    <React.Fragment>
        <MoviesHeader movieHead={moviesHeader} searchResults={searchResultsData}></MoviesHeader>
        <MoviesList searchFinalData={searchResults} ></MoviesList>
    </React.Fragment>
  )
}
