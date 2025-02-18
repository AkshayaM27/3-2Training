//import React from 'react'
// import Hoc from "./Hoc"
// const Child = ({name}) => {
//   return (
//     <div>
//         <h1>My name is </h1> {name}</h1>
//         
//     </div>
//   )
// }
//export default Hoc(Child)


// import Hoc from "./Hoc"
// const Child = ({state,demo}) => {
//   return (
//     <div>
//         <h1>Tick-Tik {state}</h1>
//         <button onClick={demo}>Click</button>
//     </div>
//   )
// }

// export default Hoc(Child)

// import React from 'react'
// import Hoc from './Hoc'
// const Child = ({arr1}) => {
//   return (
//     <div>
//         {
//         arr1.map((value,index)=>{
//             return(
//                 <li key={index}>{value}</li>
//             )
//             })
//         }
    
//     </div>
//   )
// }

// export default Hoc(Child)



import React from 'react'
import Hoc from './Hoc'
const Child = ({arr1}) => {
  return (
    <div>
     <table border="1px solid">
        <thead>
            <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            {
                arr1.map((x)=>{
                    return (
                    <tr>
                        <td>{x.name}</td>
                        <td>{x.id}</td>
                        <td>{x.role}</td>
                    </tr>
                )
                })
            }
        </tbody>
     </table>
    
    </div>
  
        )
}

export default Hoc(Child)