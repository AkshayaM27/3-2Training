import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
//  import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/Demo.jsx'
import Parent from './component/Parent.jsx'
import Biodataparent from './component/Biodataparent.jsx'
import Biodata from './component/Biodata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Cbc/>
 <Fbc/>
 <Demo/> */}

 <Parent/>
 <Biodata/>
 <Biodataparent/>
  </StrictMode>,
)
