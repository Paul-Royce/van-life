import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = true

    if(!isLoggedIn) {
        console.log(request)
        return redirect("/login")   /* !!!! FIGURE OUT WHY THE REDIRECT IS NOT WORKING! !!! */
    }
    return null
}