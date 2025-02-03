import React from 'react'
class Biodatachild extends React.Component{
    render(){
        return(
            <div>
            <h1>Biodata using props:</h1>
            <h4>my name is {this.props.name}</h4>
            <h4> I am from {this.props.address}</h4>
            <h4>My birthday is on {this.props.dob}</h4>
            <h4>My age is {this.props.age}</h4>
            <h4>Currently im studying in {this.props.clg}</h4>
            <h4>my fathers name is {this.props.fn}</h4>
            <h4>contact me from {this.props.email}</h4>
            </div>
        )
    }
}
export default Biodatachild;
