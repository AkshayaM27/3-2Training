import React, { Component } from 'react'
import CbcChild from './CbcChild'
export default class CbcParent extends Component {
    state={
        username:"Akshaya",
        id:649,
        designation:"Student"
    }
  render() {
    let fun=()=>{
        window.alert("I am class based function")
    }
    return (
      <div>
        <CbcChild name={this.state.username}
        id={this.state.id}
        desi={this.state.designation}
        arr={[10,20,30]}
        fun1={fun}/>
         
      </div>
    )
  }
}
