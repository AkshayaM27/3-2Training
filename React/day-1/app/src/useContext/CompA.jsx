//  import React from 'react'
// import CompB from './CompB'
// export let user=React.createContext()
// export let id=React.createContext()
// //
// const CompA = () => {
//   return (
//     <div>
//         <user.Provider value={"Akshaya "}>
//             <id.Provider value={649}>
//             <CompB/>
//             </id.Provider>
//         </user.Provider>
//     </div>
//   )
// }

// export default CompA

import React from 'react'
import CompB from './CompB'
export let userName=React.createContext()
export let userId=React.createContext()
const CompA = () => {
  return (
    <div>
      <userName.Provider value={"Akshaya "}><CompB/></userName.Provider>
      <userId.Provider value={649}><CompB/></userId.Provider>
    </div>
  )
}

export default CompA