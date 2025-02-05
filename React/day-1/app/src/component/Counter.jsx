import React,{useState} from 'react'

const Counter = () => {

    let [state, setState]=useState(0)
    const increment=()=>{
        state=state+1;
        setState(state);
        
    }
    let decrement=()=>{
        state =state-1;
        setState(state);
    }
    let reset=()=>{
        state=0;
        setState(state);
    }
  return (
    <div>
        <h2>Counter-Increment-Decrement</h2>
    <h2>{state}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter