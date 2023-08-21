import { useEffect, useState, Suspense } from "react"
import { useParams, useLocation, useLoaderData,defer, Await } from "react-router-dom"
import {motion} from "framer-motion"
import HeroButton from "../../UI/HeroButton"
import {BsArrowLeftShort} from "react-icons/bs"
import {LiaShuttleVanSolid} from "react-icons/lia"
import { Link } from "react-router-dom"
import { getVan } from "../../api"

export function loader({params}) {
    return defer({vans: getVan(params.id)})
}

const VanDetail = ()=> {

    const location = useLocation()

    const vanDetailsPromise = useLoaderData()

    const search = location.state?.search || ""  /* if location.state is true then look for the search key, that we previously defined in Vans.jsx otherwise return an empty string. This syntax: location.state?.search, is called "optional chaining" */
    const type = location.state?.type || "all"

    function renderVanelements(vans) {
        return(
            <>
                <div className="flex flex-col px-5 pb-56 bg-vanPalette gap-y-2">                    {/* This requires some attention to understand it properly */}
                    <div className="mb-3 "><Link className='flex items-center gap-x-1' relative="path" to={`..${search}`}><BsArrowLeftShort className="scale-150 " /><span className="underline ">Back to {type} vans</span></Link></div>
                    <motion.img className="rounded md:w-52" src={vans.imageUrl} alt={vans.name} />
                    <span className={`p-1 px-4 duration-150 rounded cursor w-fit my-3 ${vans.type === "rugged" ? "bg-ruggedVan" : vans.type === "simple" ? "bg-simpleVan" : "bg-luxuryVan"} text-white`}>{vans.type}</span>
                    <h1 className="text-xl font-bold ">{vans.name}</h1>
                    <div>
                        <span className="font-bold">${vans.price}</span><span>/day</span>
                    </div>
                    <p className=" md:w-[50%]">{vans.description}</p>
                    <HeroButton addClasses={"mt-3"} color={"rgba(255, 140, 56, 1)"}>Rent this van</HeroButton>
                 </div> 
            </>
        )
    }

    return(
        <div className="h-full pb-60 md:pb-24 bg-vanPalette">  {/* in the line below i am checking if vanDetails is true before rendering the rest of the component, i could delete it since that i am using react-router loader to make fetch requests, and it implies that this entire component won't even reneder of there is something wrong with the fetch */}
            <Suspense fallback={<h2 className='flex items-center h-screen gap-4 m-auto text-3xl font-bold text-center mt-28'>Loading...<LiaShuttleVanSolid/></h2>}>
                <Await resolve={vanDetailsPromise.vans}>
                    {renderVanelements}
                </Await>
            </Suspense>
        </div>
    )
}

export default VanDetail