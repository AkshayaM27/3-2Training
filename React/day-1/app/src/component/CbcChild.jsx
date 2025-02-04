import React, { Component } from 'react'

export default class CbcChild extends Component {
  render() {
    return (
      <div>
        <h1>Props using Class Based component:</h1>
        <h2>My name is {this.props.name}</h2>
        <h2>My Id is {this.props.id}</h2>
        <h2>My designation is {this.props.desi}</h2>

        <h2>Array: {this.props.arr}</h2>
        <button onClick={()=>this.props.fun1()}>CBC Click</button>
      </div>
    )
  }
}
