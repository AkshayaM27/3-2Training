// import React from 'react'

// let Hoc = (OriginalComponent) => {
//     let newComponent=()=>{
//         return <OriginalComponent name="Akshaya"/>
//     }
//   return newComponent
// }

// export default Hoc


// import {useState} from "react"
// let Hoc=(OriginalComponent)=>{
//    let newComponent= ()=>{
//         let [state,setState]=useState(0)
//         let demo=()=>{
//             setState(state+1)
//         }
//     return <OriginalComponent state={state} demo={demo}/>

//     }
//     return newComponent
// }
// export default Hoc

// let Hoc=(OriginalComponent)=>{
//     let newComponent=()=>{
//         let arr1=[10,20,30,40]
//         return<OriginalComponent arr1={arr1}/>

//     }
//     return newComponent
// }
// export default Hoc

let Hoc=(OriginalComponent)=>{
    let newComponent=()=>{
        let arr1=[
            {
                name:"Akshaya",
                id:649,
                role:"Developer"
                
            },
            {
                name:"Srilekha",
                id:668,
                role:"Developer"
                
            },
            {
                name:"Yeshahsvi",
                id:632,
                role:"Developer"
                
            },

        ]        
        return<OriginalComponent arr1={arr1}/>

    }
    return newComponent
}
export default Hoc