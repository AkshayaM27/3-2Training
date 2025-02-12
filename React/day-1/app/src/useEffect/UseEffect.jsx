//No dependency
// import React, {useEffect,useState} from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0);
//     useEffect(()=>{
//         //setTimeout accepts cbf and delayTime as arguments
//         setTimeout(()=>{
//             setState(()=>state+1)
//         },2000)
//     })
//   return (
//     <div>
//     <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect



//Empty dependency
// import React, {useEffect,useState} from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0);
//     useEffect(()=>{
//         //setTimeout accepts cbf and delayTime as arguments
//         setTimeout(()=>{
//             setState(()=>state+1)
//         },2000)
//     },[])//empty array is called empty dependency
//   return (
//     <div>
//     <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect



//dependeny with values (state, props)
// import React,{useState,useEffect}from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     let [incr,setIncr]=useState(0)
//     useEffect(()=>{
//         setIncr(()=>state*2)
//     },[state])
//   return (
//     <div>{state}
//     <button onClick={()=>setState((e)=>e+1)}>click</button>
//     {incr}
//     </div>
//   )
// }

//export default UseEffect


//Fetch API using useEffect Hook:
import React ,{useEffect,useState} from 'react'
import "./useeffect.css"

  const UseEffect = () => {
  let [state,setState]=useState([])
  console.log(state);
  useEffect(()=>{
    window.fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then ((res)=>setState(res))
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Price</th>
            <th>image</th>
          </tr>
        </thead>
        {
          state.map((res)=>{
            console.log(res);
            return(
              <>
              <tr>
                <td>{res.id}</td>
                <td>{res.price}</td>
                <td><img src={res.image} alt=""/></td>
              </tr>
              </>
            )
          })
        }
      </table>
      </div>
  )
}

export default UseEffect