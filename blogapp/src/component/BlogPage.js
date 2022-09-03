

import React,{Fragment,useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import classes from "./BlogPage.module.css";
import {useSelector,useDispatch} from 'react-redux';
import LoadingSpinner from '../UI/loadingSpinner'
import { blogDetails } from '../store';

export default function BlogPage() {
    let dispatch=useDispatch();
    let searchData=useSelector((data)=>data.blog.searchInput);
    let blogArray=useSelector((data)=>data.blog.blogData);



    const [requestedError,setRequestedError]=useState(null);
    const [isloading,setloading]=useState(false);

    useEffect(()=>{

       async function requestingData(search){
        try {
            setloading(true);
            let requested =await fetch(`https://gnews.io/api/v4/search?q=${search}&token=f7fcf5b34193d1e6916c52233a5db7a1`,{
                method:"GET"
               })
               if(!(requested.ok)){
                setRequestedError(requested.status);
               }
               let responseData=await requested.json();
               dispatch(blogDetails.setBlogData(responseData.articles));
               console.log(responseData);
               setloading(false);
        } catch (error) {
            setRequestedError(error.message);
            
        }
          
        }

        requestingData(searchData);
       

    },[searchData])

    if(isloading && !requestedError){
        <LoadingSpinner></LoadingSpinner>
    }

    if(requestedError){
        return <h2 className={classes.errorMessage}>
            Something Went wrong
        </h2>
    }
    console.log(blogArray);
    if(blogArray?.length==0){
        return <h2 className={classes.no__blogs}>
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
        </h2>
    }

  return (
    <Fragment>
        <div className={classes.blogDetails}>
      { blogArray?.map((data,index)=>{
            return (<Card sx={{ maxWidth: 400 }} style={{marginRight:100,marginTop:50}} key={index}>
            <CardMedia
                component="img"
                height="194"
                image={data.image}
                alt="Image"
            />
            <CardContent>
                <div>
                    <div className={classes.publication}>
                        <a href={data.source.url} target="_blank">
                        <div className={classes.publicationName}>{data.source.name}</div>
                        </a> 
                        <div className={classes.publishedAt}>{data.publishedAt}</div>
                    </div>
                    <a className={classes.title} href={data.url} target="_blank">{data.title}</a>
                    <div className={classes.description}>{data.description}</div>
                </div>
            </CardContent>
        </Card>
            )
               
       })}
            
        </div>
    </Fragment>
  )
}
