import React, { useState } from 'react'
import {motion} from "framer-motion"

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})

    function handleChange(e) {
        const {name, value} = e.target
        setLoginFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData);
    }
  return (
    <div className='h-screen p-5 m-auto bg-vanPalette'>

        <div className='flex flex-col gap-5 m-auto max-w-xl mt-[50%] md:mt-[10%]' >
            <h1 className='text-3xl font-bold text-center md:text-4xl'>Sign in to your account</h1>
            
            <form className='flex flex-col rounded border-1' onSubmit={handleSubmit}>
                <input
                    className='h-10 pl-3 rounded'
                    onChange={handleChange}
                    name='email'
                    type="email" 
                    placeholder='Email Address'
                    value={loginFormData.email}
                />
                <input
                    className='h-10 pl-3 rounded' 
                    onChange={handleChange}
                    name='password'
                    type="password" 
                    placeholder='Password'
                    value={loginFormData.password}
                />
                <button className='p-3 px-5 mt-5 text-white bg-orange-400 rounded cursor-pointer'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login