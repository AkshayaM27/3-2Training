import React from 'react';
import Biodatachild from './Biodatachild';
class Biodataparent extends React.Component {
    state={
        username:"Akshaya",
        college:"MRUH",
        DOB:"27.10.2004",
        Age:"20yrs",
        Address:"Hyderabad-telangana",
        Email:"makshaya2704@gmail.com",
        Fathers_name:"M.Rajasekhar"
    }
    render(){
  return (
  
    <Biodatachild name={this.state.username} 
    dob={this.state.DOB} 
    age={this.state.Age} 
    email={this.state.Email}
    clg={this.state.college}
    fn={this.state.Fathers_name}
    address={this.state.Address}/>
  )
}
}

export default Biodataparent;