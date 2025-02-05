import React ,{useState} from 'react'
import video1 from './14205-255658030_tiny.mp4'
const Video_play_pause = () => {
  let [state,setState]=useState(true)
  let demo=()=>{
    let demo1=document.getElementById("demo")
    console.log(demo);
    setState(!state)
    state === true ? demo1.play():demo1.pause()
    
  }
  return (
    <div>
        <video src={video1} height="300px" id="demo" onClick={demo}></video>
    </div>
  )
}

export default Video_play_pause