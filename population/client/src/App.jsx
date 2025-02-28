import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './signup'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PopulationData from './Data'
import Login from './Login'
import Homepage from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Homepage/>}></Route>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Home' element={<PopulationData/>}></Route>
    {/* <Route path='/Data' element={<PopulationData/>}></Route> */}
   </Routes>
   </BrowserRouter>
  )
}

export default App
