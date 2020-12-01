import { connect} from 'react-redux'
import React, {useState} from 'react'

function Counter(props){

    const [value,setValue]= useState(0)

    const handleOnChange =(e)=>{
        let newValue = parseInt(e.target.value)
        setValue(newValue)

    }
    return(
        <div>
            <h1>{props.ctr}</h1>
            <button onClick={()=>props.onIncrement()}>Increment</button>
            <button onClick={()=>props.OnDecrement()}>Decrement</button>
            <input type="text" onChange={handleOnChange}></input>
            <button onClick={()=>props.onIncrementValue(value)}>Add</button>
        </div>
    )
}

const mapStatetoProps= (state)=>{
    return{
        ctr:state.counter
    }
}

const mapDistpatchToProps = (dispath)=>{
    return{
        onIncrement:()=> dispath({type:"Increment"}),
        OnDecrement: ()=> dispath({type:"Decrement"}),
        onIncrementValue: (value)=> dispath({type:"IncrementByValue",no:value})
    }
}

export default connect(mapStatetoProps,mapDistpatchToProps)(Counter)