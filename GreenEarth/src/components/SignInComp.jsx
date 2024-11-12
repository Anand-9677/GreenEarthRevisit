import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignInComp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            alert('Please fill in all fields.')
            return;
        }

        console.log('Email:', email)
        console.log('Password:', password)
    }

  return (
    
    <div className='h-[42vw] w-[35vw] bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center' >
        <form onSubmit={handleSubmit}>
        <h1 className='text-5xl text-white text-center'>Sign In</h1>
        <label className='flex flex-col mt-10'>
          <span className='text-2xl text-white'>E-mail</span>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-[25vw] mt-2 px-4 py-2 border rounded-full focus:ring focus:ring-blue-300" 
            required
          />
        </label>
        <label className="flex flex-col mt-6">
          <span className="text-white text-2xl">Password</span>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-[25vw] mt-2 px-4 py-2 border rounded-full focus:ring focus:ring-blue-300"
            required
          />
        </label>

        <button 
          type="submit" 
          className="w-[50%] font-semibold text-lg bg-white text-black py-2 rounded-full mt-10 ml-20 hover:bg-gray-500 hover:text-white focus:ring focus:ring-gray-700"
        >
          Sign In
        </button>
        </form>
        <h3 className='text-white text-lg mt-10'>Don't have an account? <Link to='/signup' className='text-blue-600 underline hover:text-blue-500'>SignUp</Link></h3>
    </div>
  )
}

export default SignInComp
