import React,{useState} from 'react'

const State = () => {
    let [state,setState]=useState("Batch-5")
    console.log(state);
    console.log(setState);
    let demo=()=>{
        setState("Batch-6")
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={demo}>Click </button>
    </div>
  )
}

export default State