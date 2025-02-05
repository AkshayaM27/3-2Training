import React ,{useState}from 'react'

const Signin = () => {
    let[name,setName]=useState()
    let[password,setPassword]=useState()
    let demo=(e)=>{
        e.preventDefault()//prevents page reloading
        console.log({name,password});
        name ==='admin' && password==='12345'? window.open("https://www.youtube.com"):window.location.reload()
    }
  return (
    <div>
        <h2>Sign up</h2>
        <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
<br/>
<label htmlFor="password">Password:</label>
<input type="password" name="password" id="password" value={password}
onChange={(e)=>{setPassword(e.target.value)}}/>
<br/>
<button onClick={demo}>Submit</button>
        </form>
    </div>
  )
}

export default Signin