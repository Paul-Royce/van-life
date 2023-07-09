import {BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider , Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vansLoader} from './pages/vans/Vans'
import Login from "./pages/vans/Login"
import VanDetail from './pages/vans/VanDetail'
import Layout from './components/layout/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans from './pages/host/HostVans'
import HostLayout from './components/layout/HostLayout'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVansInfo from './pages/host/HostVansInfo'
import HostVansPricing from './pages/host/HostVansPricing'
import NotFound from "./pages/NotFound"
import Error from "./components/error"
import HostVansPhotos from './pages/host/HostVansPhotos'
import "./server"
                        /* i'm using createRoutesElements to use the previous BrowserRouter Syntax, i could use the array of object version instead, look up at react-router documentation to have a better understanding */
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} > {/* This parent route is gonig to share his UI element (<Layout />) to all the child routes */}
    <Route path="*" element={<NotFound />} />
    <Route index element={<Home />} />  {/* Since this route has an index prop it will be shown when the path will be the same as the parent one */}
    <Route path='about' element={<About />} /> {/* Since about is a child route of another route there is no need to put the / on the path we can right his path as a relative one  */}
    <Route path='vans' element={<Vans />} errorElement={<Error />} loader={vansLoader} /> 
    <Route path='vans/:id' element={<VanDetail />} />  
    <Route path='login' element={<Login />} /> 


    <Route path='host' element={<HostLayout />} >
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<HostVanDetail />}>
        <Route index element={<HostVansInfo />} />
        <Route path='pricing' element={<HostVansPricing />} />
        <Route path='photos' element={<HostVansPhotos />} />
      </Route>
    </Route>
  </Route>
))

function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
