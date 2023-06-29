import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {motion} from "framer-motion"
import HeroButton from "../UI/HeroButton"
import Footer from "../components/Footer"
import {BsArrowLeftShort} from "react-icons/bs"
import { Link } from "react-router-dom"

const VanDetail = ()=> {

    const [vanDetails, setVanDetails] = useState(null)
    const params = useParams()

    function fetchVanDetails() {
        fetch(`/api/vans/${params.id}`)
        .then(resp => resp.json())
        .then(result => setVanDetails(result.vans))
      }

    useEffect(()=> {
        fetchVanDetails()
    }, [params.id])

    return(
        <div className="h-full bg-vanPalette">
            <div className="flex flex-col h-screen px-5 m-auto gap-y-2">
                <div><Link className='flex items-center gap-x-1' to="/vans"><BsArrowLeftShort className="scale-150 " /><span className="underline ">Back to all vans</span></Link></div>
                <motion.img src={vanDetails && vanDetails.imageUrl} alt={vanDetails && vanDetails.name} />
                <h1 className="font-bold">{vanDetails && vanDetails.name}</h1>
                <div>
                    <span className="font-bold">${vanDetails && vanDetails.price}</span><span>/day</span>
                </div>
                <p>{vanDetails && vanDetails.description}</p>
                <HeroButton addClasses={"mt-3"} color={"rgba(255, 140, 56, 1)"}>Rent this van</HeroButton>
            </div>
            <Footer />
        </div>
    )
}

export default VanDetail