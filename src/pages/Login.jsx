import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Form, Navigate, useActionData, useNavigation } from 'react-router-dom'
import { loginUser } from '../api'

                        /* i could destructure the obj parameter directly in: {request}, but for this project i will stick to the entire object */
export async function action(obj) { /* the action function should alway return something even a null will be enough */
    const formData = await obj.request.formData() /* The formData() object is actualluy a native JS formData object, i can have a look in MDN Docs */
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({email, password})
        console.log(data)
        localStorage.setItem("loggedIn", true)
    } catch(err) {
        return err.message  /* This is where useActionData takes his value if an error happens */
    }
    return null
}

const Login = () => {

    useEffect(()=> {
        document.title = "#Vanslife | Log In"
      }, [])
      
    const errorMessage = useActionData()
    console.log(errorMessage)

    const [status, setStatus] = useState("idle")
    const location = useLocation()
    console.log(location.state?.message)

    const navigate = useNavigate()
    const NAVIGATION = useNavigation()  /* This is differnt to useNavigate */
    const {state} = NAVIGATION
    console.log(NAVIGATION);

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setSubmitError(null) /* in case the user already made an error then he/she fixes it and then there is re-submit */
        try {
            if(loginFormData.email.length === 0 || loginFormData.password.length === 0) {
                setEmptyField(true)
                return
            }
            setEmptyField(false)
            const userData = await loginUser(loginFormData)
            navigate("/host", {replace: true}) /* replace true acts in a way that the user does not go back to the login page when he/she goes back in the browsing history */
            console.log(userData)
        } catch(err) {
            setSubmitError(err)
            setStatus("idle")
        } finally {
            setStatus("idle")
        }
    }

  return (
    <div className='h-screen p-5 m-auto bg-vanPalette'>

        {localStorage.getItem("loggedIn") && <Navigate replace={true} to="/host" />}

        <div className='flex flex-col gap-5 m-auto max-w-xl mt-[50%] md:mt-[10%]' >
            <h1 className='text-3xl font-bold text-center md:text-4xl'>Sign in to your account</h1>
            {
            location.state && /* only render the p tag only if the location.state is true */
                <h2 className='p-1 mt-1 font-bold text-center text-red-600 bg-red-200'>
                    {location.state?.message || "Something went wrong. Try again."} {/* try to access the message property, if is not there display Try again  */}
                </h2>
            }
                            {/* THis replace prop will avoid the user to go back to the login page when he uses the browser history by clicking the arrow back button */}
            <Form method='post' replace className='flex flex-col rounded border-1'>

                {errorMessage && <p className='p-1 mb-3 font-bold text-center text-red-600 bg-red-200'>{errorMessage}</p>}
                <input
                    className='h-10 pl-3 rounded'
                    name='email'
                    type="email" 
                    placeholder='Email Address'
                />
                <input
                    className='h-10 pl-3 rounded' 
                    name='password'
                    type="password" 
                    placeholder='Password'
                />
                <button disabled={state === "submitting"} className={`p-3 px-5 mt-5 text-white ${state === "idle" ? "bg-orange-400" : "bg-gray-500" } rounded cursor-pointer`}>
                    {state === "idle" ? "Log in" : "Submitting..."}
                </button>
            </Form>
        </div>
    </div>
  )
}

export default Login