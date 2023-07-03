import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import Layout from './components/layout/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans from './pages/host/HostVans'
import HostVanDetail from './pages/host/HostVanDetail'
import HostLayout from './components/layout/HostLayout'
import "./server"



function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Layout />}> {/* This parent route is gonig to share his UI element (<Layout />) to all the child routes */}
          <Route index element={<Home />} />  {/* Since this route has an index prop it will be shown when the path will be the same as the parent one */}
          <Route path='about' element={<About />} /> {/* Since about is a child route of another route there is no need to put the / on the path we can right his path as a relative one  */}
          <Route path='vans' element={<Vans />} /> 
          <Route path='vans/:id' element={<VanDetail />} />  
        

          <Route path='host' element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
