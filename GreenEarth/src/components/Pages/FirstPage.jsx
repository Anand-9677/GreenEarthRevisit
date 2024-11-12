import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Stats from './Stats';
function FirstPage() {
  return (
    <div>
      <img className='relative h-[50vw] w-full object-cover pt-4' src="https://images.unsplash.com/photo-1535882832-ac75c142f79f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwbGFudHN8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='absolute top-4 w-full'>
      <Navbar />
      </div>
      <img className='absolute top-28 right-6 h-[40vw] w-[45%] object-cover object-bottom [border-bottom-right-radius:80px]' src="https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnRzfGVufDB8fDB8fHww" alt="" />
      <div className='absolute h-[40vw] w-[50%] top-28 left-6 text-white'>
      <h1 className='text-8xl font-thin leading-tight'>Where Nature Meets Elegance</h1>
      <p className='capitalize mt-8 w-[70%] text-xl'>elevate your environment - acquire our botanical luxuries today</p>
      <Link to='/plants' className='absolute mt-14 ml-2 pl-8 pr-8 pt-2 pb-2 bg-white text-black text-lg font-semibold rounded-full'>Order Now</Link>
      </div>
      <div className='absolute bottom-0 left-[40vw]'>
        <Stats />
      </div>
    </div>
  );
}

export default FirstPage;