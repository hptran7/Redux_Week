const initialState = {
    counter:0,
    name:"Test"
}

const reducer= (state =initialState,action)=>{
    if(action.type=='Increment'){
        return{
            ...state,
            counter: state.counter +1
        }
    }else if(action.type =="IncrementByValue"){
        return{
            ...state,
            counter: state.counter + action.no
        }
    }else if(action.type =="Decrement"){
        return{
            ...state,
            counter: state.counter -1
        }
    }
    return state
}

export default reducer