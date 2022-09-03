
import {useReducer,useCallback} from "react"


function handlerFunction(state,action){

    if(action.type=="SEND"){

        return {
            status:"pending",
            data:null,
            error:null,
        };
    }

    if(action.type=="Success"){
        console.log(action);
        return {
            status:"completed",
            data:action.responseData,
            error:null,

        }

    }
    if(action.type=="Error"){
        return {
            status:"completed",
            data:null,
            error:action.errorMessage,
        }

    }

    return state;

}

const  initalFunction={

    status:null,
    data:null,
    error:null,

}

    function useHttps(requestFunction){
        const [httpState,dispatch] =useReducer(handlerFunction,initalFunction);

        const sendRequest= useCallback( async (requestData)=>{
                dispatch({type:"SEND"})
                try {
                    const repsonseData=  await requestFunction(requestData);
                    if(repsonseData.status=="200"){
                        // console.log(repsonseData.data.items);
                        dispatch({type:"Success",responseData:repsonseData.data.items});
                    }
                    else if(repsonseData.status=="400"){
                        dispatch({type:"Error",errorMessage:repsonseData.status.message|| "Something went wrong"});
                    }else if(repsonseData.status=="500"){
                        dispatch({type:"Error",errorMessage:repsonseData.status.message|| "Something went wrong"});
                    }
    
                   
                } catch (error) {
                    dispatch({type:"Error",errorMessage:error.message|| "Something went wrong"});
                    
                }
        },[])

        return {
            sendRequest,
            ...httpState,
        }


    }

    export default useHttps;