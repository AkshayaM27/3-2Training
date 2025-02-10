import React from 'react'
import List from './List'

const Comp3 = () => {
    let demo=[{
        name:"Akshaya",
        id:1
    },{
        name:"abc",
        id:2
    },{
        name:"xyz",
        id:3
    },{
        name:"hsk",
        id:4
    }]
  return (
    <div>
      <List main={demo}/>
      
    </div>
  )
}

export default Comp3