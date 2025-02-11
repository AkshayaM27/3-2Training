//  import React from 'react'
// import { user,id } from "./CompA"
// //
// const CompC = () => {
//   return (
//     <div>{
//   <user.Consumer>{
//         (name)=>{
//             return (
//                 <>
//                 {
//                 <id.Consumer>
//                 {
//                     (number)=>{
//                         return (
//                             <>
//                             <h1>my name is {name}</h1>
//                             <h1>my id is number {number}</h1>
//                             </>
//                         )
//                     }
                
//                 }
//                 </id.Consumer>
//                     }

//                 </>
//             )
//         }   
//     }
//   </user.Consumer>
// }
//     </div>
//   )
// }

// export default CompC
import React,{useContext} from 'react'
import { userName ,userId} from './CompA'
const CompC = () => {
  let name=useContext(userName)
  let id=useContext(userId)
  return (
    <div>{name} {id}</div>
  )
}

export default CompC