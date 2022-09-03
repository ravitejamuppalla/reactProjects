


import React,{useCallback, useState} from "react";



function useHttps(bodyData){

    const [error,setError]=useState(null);
    const [isloading,setIsLoading]=useState(false);



  let requestFunction= useCallback(async (searchResults)=>{
    setIsLoading(true)
        const response= await fetch('http://www.omdbapi.com/?s='+searchResults+'&apikey=513c1e5c',{
          method:"GET",
          headers:{},
          body:null
          });
          if(!(response.ok=="200")){
            setError("Error in Response " + response.ok);
          }
          const reponseData=await response.json();
         
          if((reponseData ?.Response)=="True"){
            bodyData(reponseData.Search);
          }
          else{
            bodyData("No Results Found");
          }
          setIsLoading(false);
      }
  )
    return{
        isloading:isloading,
        error:error,
        requestFunction:requestFunction
    }

}

export default useHttps;

