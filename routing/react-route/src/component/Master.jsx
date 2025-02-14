//import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Login'
import Dashboard from './Dashboard'
import Error from './Error'
import Mobiles from './Mobiles'
import Laptops from './Laptops'
const Master = () => {
  return (
    <div>
    <Routes>
    {/* Forward slash (/) indicates default  */}
    <Route path='/' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='dashboard/mobiles' element={<Mobiles/>}></Route>
      <Route path='dashboard/laptops' element={<Laptops/>}></Route>
    </Route>
    <Route path='/error' element={<Error/>}></Route>
    </Routes>

    </div>
  )
}

export default Master