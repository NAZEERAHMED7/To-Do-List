import React, { useRef, useState } from 'react'
import { assets } from '../assets/frontend-assets/assets'

const Signup = () => {
    const [currentState, setCurrentState]= useState('Sign Up')
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)


    const handleSubmit = (e) =>{
        e.preventDefault()
        if (currentState === 'Sign Up') {
            
            if (passwordRef.current.value !== confirmPasswordRef.current.value){
                console.log('incorrect password');
                return null
            }
            const data= {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
            console.log(data)
            
            console.log('signup is triggered')
        }else{
            console.log("login triggered");
    
            const data= {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
            console.log(data)
            
        }
    }

  return (
    <div className='bg-primary-100 min-h-screen flex items-center justify-center px-4'>
      <form className='w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8' onSubmit={handleSubmit}>

        <div className='mb-4 flex flex-col items-center text-center'>
            <img className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-full' src={assets.Logo} alt="Logo" />
            { currentState === 'Sign Up'?
            <p className='text-2xl font-semibold text-gray-700 mt-4'>Register</p>:
            <p className='text-2xl font-semibold text-gray-700 mt-4'>Login</p>
            }
        </div>

        <div className='space-y-4'>
        { currentState === 'Sign Up'?
          <div>
            <label htmlFor="Name" className='block text-gray-600 text-sm font-medium mb-1'>Name</label>
            <input ref={nameRef} type="text" placeholder='Enter Name' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100' />
          </div>: ''
        }
          <div>
            <label htmlFor="Email" className='block text-gray-600 text-sm font-medium mb-1'>Email</label>
            <input ref={emailRef} type="email" placeholder='Enter Email' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100' />
          </div>
        
          <div>
            <label htmlFor="Password" className='block text-gray-600 text-sm font-medium mb-1'>Password</label>
            <input ref={passwordRef} type="password" placeholder='Enter Password' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100' />
          </div>
        { currentState === 'Sign Up'?
          <div>
            <label htmlFor="Confirm Password" className='block text-gray-600 text-sm font-medium mb-1'>Confirm Password</label>
            <input ref={confirmPasswordRef} type="password" placeholder='Enter Confirm Password' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100' />
          </div>:''
        }
          {
            currentState === 'Sign Up'?
          <button type='submit' className='w-full mt-4 p-2 bg-gray-950 text-white font-semibold rounded-md hover:bg-primary-100'>Sign Up</button>:
          <button type='submit' className='w-full mt-4 p-2 bg-gray-950 text-white font-semibold rounded-md hover:bg-primary-100'>Sign In</button>
        }
        </div>
        <div className='flex justify-between pt-2'>
            <p className='hover:text-primary-100'>Forget password</p>
            {
                currentState === 'Sign Up'?
            <p onClick={() => setCurrentState('login')} className='hover:text-primary-100 cursor-pointer'>Already have a account</p>:
            <p onClick={() => setCurrentState('Sign Up')} className='hover:text-primary-100 cursor-pointer'>Create account</p>
            }
        </div>
      </form>
    </div>
  )
}

export default Signup
