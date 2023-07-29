import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vansLoader} from './pages/vans/Vans'
import Login, {action as  loginAction} from "./pages/Login"
import VanDetail, {loader as vanDetailLoader} from './pages/vans/VanDetail'
import Layout from './components/layout/Layout'
import Dashboard, {loader as dashVansloader} from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans, {loader as hostVansLoader} from './pages/host/HostVans'
import HostLayout from './components/layout/HostLayout'
import HostVanDetail, {loader as hostVanDetailLoader} from './pages/host/HostVanDetail'
import HostVansInfo from './pages/host/HostVansInfo'
import HostVansPricing from './pages/host/HostVansPricing'
import NotFound from "./pages/NotFound"
import RouteError from "./components/RouteError"
import HostVansPhotos from './pages/host/HostVansPhotos'
import { requireAuth } from "./utils"
import "./server"

localStorage.removeItem("loggedIn")
                        /* i'm using createRoutesElements to use the previous BrowserRouter Syntax, i could use the array of object version instead, look up at react-router documentation to have a better understanding */
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} > {/* This parent route is gonig to share his UI element (<Layout />) to all the child routes */}
    <Route index element={<Home />} />  {/* Since this route has an index prop it will be shown when the path will be the same as the parent one */}
    <Route path="*" element={<NotFound />} />
    <Route path='about' element={<About />} /> {/* Since about is a child route of another route there is no need to put the / on the path we can right his path as a relative one  */}
    <Route path='vans' element={<Vans />} errorElement={<RouteError />} loader={vansLoader} /> 
    <Route path='vans/:id' element={<VanDetail />} errorElement={<RouteError/>} loader={vanDetailLoader} />  
    <Route action={loginAction} path='login' element={<Login />} /> 


    <Route path='host' element={<HostLayout />} >
      <Route 
      index 
      element={<Dashboard />} 
      loader={dashVansloader}
      />
      <Route 
      path='income' 
      element={<Income />}
      loader={async ({request}) => {
        return await requireAuth(request)
      }} 
      />
      <Route 
      path='reviews' 
      element={<Reviews />}
      loader={async () => await requireAuth()} 
      />
      <Route 
      path='vans' 
      element={<HostVans />}
      errorElement={<RouteError />}
      loader={hostVansLoader} 
      />
      <Route 
      path='vans/:id' 
      element={<HostVanDetail />}
      errorElement={<RouteError />}
      loader={hostVanDetailLoader}
      >
        <Route 
        index 
        element={<HostVansInfo />}
        loader={async ()=> {
          return null
        }} 
        />
        <Route 
        path='pricing' 
        element={<HostVansPricing />}
        loader={async ()=> {
          return null
        }} 
        />
        <Route 
        path='photos' 
        element={<HostVansPhotos />}
        loader={async ()=> {
          return null
        }} 
        />
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
