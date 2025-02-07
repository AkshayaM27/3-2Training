import React,{useRef} from 'react'

const Play_pause_ref = () => {
    let name=useRef('')
    let password=useRef('')
    let demo=(e)=>{
        e.preventDefault()
        //console.log({name.current.value});
         console.log({name:name.current.value});
         console.log({password:password.current.value});

    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">Name:</label>
            <input type ="text" name="name" id ="name" ref={name}/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" ref={password}/>
            <br/>
            <button  onClick={demo}>Submit</button>
        </form>
    </div>
  )
}

export default Play_pause_ref