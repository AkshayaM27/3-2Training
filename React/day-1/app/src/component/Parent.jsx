// import React from 'react';
// import Child from "./Child"; 
// class Parent extends React.Component {
//     state={
//         username:"Akshaya"
//     }
//     render(){
//   return (
//     <Child name={this.state.username}/>
//   )
// }
// }

// export default Parent;
import React from 'react'//--->error is comming so we can remove its not a problem
import Child from "./Child"
const Parent = () => {
  // let obj1={
  //   name:"Akshaya",
  //   id:649,
  //   designation:"student"
   
  // }
  let fun=()=>{
    window.alert("I am  function")
}
  return (
    <div>
      {/* <Child name="Akshaya" age={23}/> */}
      {/* <Child arr={[10,20,30]}/> */}
      {/* <Child {{ name:"Akshaya",
      id:649,
      designation:"student"}}/> */}
      {/* <Child obj={obj1}/> */}
      <Child fun1={fun}/> 
      
    </div>
  
  )
}

export default Parent