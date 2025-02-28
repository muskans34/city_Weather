import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'


function MainLayout() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default MainLayout
