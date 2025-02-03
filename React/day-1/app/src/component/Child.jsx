// import React from 'react'
// class Child extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>my name is {this.props.name}</h1>
//             </>
//         )
//     }

// }
// export default Child;
import React from 'react'//--->error is comming so we can remove its not a problem
const Child = (props) => {//parameter name can be anything like props or a or b.....
   //console.log(props.obj);
    //destructer 
    // let {name,id ,designation}=props.obj;
   
    // console.log(name)
    // console.log(id);
    // console.log(designation);
    // console.log(props.arr);//but in cosnole we get the spaces inside the array
    return (
    <div>
      {/* <h1>My name is {props.name}</h1>
      <h1>My age is {props.age}</h1> */}
      {/* <h1>Array is {props.arr}</h1> */}
      {/* on web array is printed without spaces */}
    {/* <h1>my name is {name}</h1>
      <h1>my id is {id}</h1>
      <h1>my designation is {designation}</h1>  */}

{/* another way rather than object destructuring is   */}
      {/* <h3>my name is { props.obj.name}</h3>
      <h3>my id is { props.obj.id}</h3>
      <h3>my designation is { props.obj.designation}</h3>  */}
    <button onClick={()=>props.fun1()}>click</button>

    </div>
  )
}
export default Child