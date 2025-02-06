import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
// import App from './App.jsx'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/Demo.jsx'
// import Parent from './component/Parent.jsx'
// import Biodataparent from './component/Biodataparent.jsx'
// import Biodata from './component/Biodata.jsx'
// import CbcParent from './component/CbcParent.jsx'
// import State from './component/State.jsx'
// import Counter from './component/Counter.jsx'
// import Signin from './component/Signin.jsx'
// import Video_play_pause from './state/Video_play_pause.jsx'
// import Inline from './styles/Inline.jsx'
import "../src/styles/globally.css"
import Comp1 from './styles/Comp1'
import Comp2 from './styles/Comp2'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1/>
    <Comp2/>
  {/* <Cbc/>
 <Fbc/>
 <Demo/> */}
 {/* <Inline/>
 <Video_play_pause/>
 <Signin/>
 <Counter/>
 <CbcParent/>
<State/>
 <Parent/>
 <Biodata/>
 <Biodataparent/> */}
  </StrictMode>,
)
