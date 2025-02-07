// import React, {useRef} from 'react'

// const Ref = () => {
//     let demo=useRef()
//     console.log(demo);
//     console.log(demo.current);
//     demo.current.style.backgroundColor="red";
//   return (
//     <div>
//         <h1 ref={demo} >Hello-World</h1>
       
//     </div>
//   )
// }

// export default Ref


import React, {useRef} from 'react'

const Ref = () => {
    let demo1=useRef()
    let eventHandler=()=>{
        demo1.current.style.backgroundColor="Crimson"
    }
  return (
    <div>
        <h2 ref={demo1}>Hello</h2>
        <button onClick={eventHandler}>Click</button> 
    </div>
  )
}
export default Ref