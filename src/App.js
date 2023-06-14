import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Details from './Details'; 
import Navbar from './Navbar';
 

 function App() {
   
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/details' element={<Details/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App;
 