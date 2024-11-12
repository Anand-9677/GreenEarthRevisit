import React from 'react';
import { IoEarth } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className='h-[5vw] w-full bg-transparent flex  items-center justify-between'>
      <div className='pl-4 text-4xl font-semibold text-white flex'>greenEarth<IoEarth className='mt-1' /></div>
      <div className='text-white pr-6 text-2xl flex items-center gap-6'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/plants' className='hover:underline'>Plants</Link>
        <Link to='/supplies' className='hover:underline'>Supplies</Link>
        <Link to='/blog' className='hover:underline'>Blog</Link>
        <Link to='/login' className='hover:underline'>Login</Link>
        <Link to='/cart' ><IoCartOutline className='mt-1' /></Link>
      </div>
    </nav> 
  );
}

export default Navbar;
