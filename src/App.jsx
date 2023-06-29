import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Header from './components/Header'
import "./server"



function App() {

  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
