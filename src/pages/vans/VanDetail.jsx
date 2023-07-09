import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import {motion} from "framer-motion"
import HeroButton from "../../UI/HeroButton"
import {BsArrowLeftShort} from "react-icons/bs"
import { Link } from "react-router-dom"

const VanDetail = ()=> {

    const location = useLocation()
    console.log(location)

    const [vanDetails, setVanDetails] = useState(null)
    const params = useParams()

    const search = location.state?.search || ""  /* if location.state is true then look for the search key, that we previously defined in Vans.jsx otherwise return an empty string. This syntax: location.state?.search, is called "optional chaining" */
    const type = location.state?.type || "all"

    function fetchVanDetails() {
        fetch(`/api/vans/${params.id}`)
        .then(resp => resp.json())
        .then(result => setVanDetails(result.vans))
      }

    useEffect(()=> {
        fetchVanDetails()
    }, [params.id])

    return(
        <div className="h-full pb-24 bg-vanPalette">
            {vanDetails ? <div className="flex flex-col h-screen px-5 m- gap-y-2">                    {/* This requires some attention to understand it properly */}
                <div className="mb-3 "><Link className='flex items-center gap-x-1' relative="path" to={`..${search}`}><BsArrowLeftShort className="scale-150 " /><span className="underline ">Back to {type} vans</span></Link></div>
                <motion.img className="rounded md:w-52" src={vanDetails.imageUrl} alt={vanDetails.name} />
                <span className={`p-1 px-4 duration-150 rounded cursor w-fit my-3 ${vanDetails.type === "rugged" ? "bg-ruggedVan" : vanDetails.type === "simple" ? "bg-simpleVan" : "bg-luxuryVan"} text-white`}>{vanDetails.type}</span>
                <h1 className="text-xl font-bold ">{vanDetails.name}</h1>
                <div>
                    <span className="font-bold">${vanDetails.price}</span><span>/day</span>
                </div>
                <p className=" md:w-[50%]">{vanDetails.description}</p>
                <HeroButton addClasses={"mt-3"} color={"rgba(255, 140, 56, 1)"}>Rent this van</HeroButton>
            </div> : <h2 className="text-center mt-60">Loading...</h2>}
        </div>
    )
}

export default VanDetail