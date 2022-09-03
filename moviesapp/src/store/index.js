
import { createStore } from 'redux';

const initalValues={
    myWatchList:[]
}
function reducerFunction(state = initalValues,action){

    if(action.type === "AddingWatchList"){
        let updatedItems=[];
        updatedItems=[...state.myWatchList];
        let arrayvalue= updatedItems.find((dataList)=>dataList.id==action.value.id)
        if(!arrayvalue) return {myWatchList:updatedItems.concat(action.value)}
        else return {myWatchList:updatedItems}
    }
    if(action.type=="RemoveWatchList"){
        
        let updatedItems=[];
        updatedItems=[...state.myWatchList];
        console.log(action.value);
        let arrayvalue= updatedItems.filter((dataList)=>{
            console.log(dataList.id);
            console.log(+action.value);
           return  dataList.id!== +action.value
        }
       
        );
        console.log(arrayvalue);

        return {myWatchList:arrayvalue}

    }

    return initalValues

}

let store =createStore(reducerFunction);
export default store;