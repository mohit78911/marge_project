import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Details from './Details'; 
import Navbar from './Navbar';
 

 function App() {
  const [loginStatus,setLoginStatus] = useState(false)
  return (
    <div>
       <BrowserRouter>
       <Navbar loginStatus={loginStatus}/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setLoginStatus={setLoginStatus}/>}/>
        <Route path='/details' element={<Details/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App;
 