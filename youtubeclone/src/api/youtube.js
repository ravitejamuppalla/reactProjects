
import axios from "axios"
const apiAxios = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    // baseURL:"https://dummyjson.com/",
    
  });


 export async function  getRequest(requestData){

   const reponseData= await apiAxios.get(requestData.searchURL,{
    params:{
        part:"snippet",
        key:"AIzaSyBAN49t-FPKwIVd7HF1qFHNyCSjWqFK7C0",
        q:requestData.searchTerm,
    }
   });

   return reponseData;


  }