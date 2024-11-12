import React from 'react'
import SignInComp from './SignInComp'
import { IoEarth } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div>
        <div className='bg-[#283618] h-[47vw] w-full flex items-center justify-center'>
            <img className='relative h-[89%] w-[94%] object-cover' src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='absolute top-8 right-10' >
                <SignInComp />
            </div>
            <div className='absolute h-[90%] w-[59%] bg-transparent left-10 flex flex-col items-center justify-center text-white'>
                <h1 className='text-5xl w-[70%] text-center'>Unlock a world of green wonders</h1>
                <p className='w-[65%] text-center mt-5'>Sign up now to access exclusive plant varieties, care tips, and personalized recommendations. Join our growing community of plant lovers today.</p>
            </div>
        </div>
        <div className='h-[20vw] w-full bg-[#031407] flex items-center justify-between text-white'>
            <Link to='/'><h1 className='text-3xl flex ml-8'>greenEarth<IoEarth className='mt-1'/></h1></Link>
            <div className='w-[40%] h-[55%] flex'>
                <div className='h-full w-[50%] flex flex-col items-start justify-center border-l-2 pl-6'>
                    <h1 className='mb-6'>Menu</h1>
                    <Link to='/' className='text-gray-400'><h2>Home</h2></Link>
                    <Link to='/plants' className='text-gray-400'><h2>Plants</h2></Link>
                    <Link to='/supplies' className='text-gray-400'><h2>Supplies</h2></Link>
                    <Link to='/blog' className='text-gray-400'><h2>Blog</h2></Link>
                </div>
                <div className='h-full w-[50%] flex flex-col items-start justify-center border-l-2 pl-6 text-xl'>
                    <h1>Contact Us</h1>
                    <h1 className='flex gap-2 mt-2'>
                        <Link><FaInstagram/></Link>
                        <Link><FaTelegram/></Link>
                        <Link><FaXTwitter/></Link>
                    </h1>
                </div>
            </div>
        </div>
        <hr />
        <h1 className='bg-[#031407] text-white text-center'>©All Copyrights Reserved</h1>
    </div>
  )
}

export default Login
