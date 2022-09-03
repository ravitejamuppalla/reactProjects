
import {createStore} from 'redux'


const intitalValues={
    notes:[]
}
function reducerFunction(state=intitalValues,action){
    if(action.type=="InitalData"){
        return {
            notes:action.value
        }
    }
    if(action.type=="Add"){
        return {
            notes: [...state.notes].concat(action.value),
        }
    }
    if(action.type=="Remove"){
        let removedata=[...state.notes].filter((values)=>values.id!==action.value);

        return {
            notes:removedata
        }
    }
    return intitalValues;
        
}


const store=createStore(reducerFunction);

export default store;