import React from 'react'
import { Link } from 'react-router-dom'

function FourthPage() {
    const data = [
        {heading: 'Choose Plants', para: 'Revamp your decor effortlessly with our handpicked selection of botanical marvels'},
        {heading: 'Place an Order', para: 'Each prime to just not adorned  but elevate your space into a realm of natural oppulence'},
        {heading: 'Get Plants Delivered', para: 'Transform your into a heaven of style and screnity with our collection of plants'}
    ]
  return (
    <div className='h-[47vw] w-full flex items-center justify-center'>
        <img className='relative h-full w-full object-cover' src="https://images.unsplash.com/photo-1498735599329-ed6e3798cdcb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute top-[64vw] h-[90%] w-[90%] bg-white/40 backdrop-blur-sm text-white px-10 py-8'>
            <h1 className='text-4xl text-center'>Easy Order</h1>
            {data.map((item, index)=>(
                <>
                <div className='flex gap-6 mt-8'>
                <div className='border-2 rounded-full flex items-center justify-center px-6 py-3 text-5xl'>
                    {index+1}
                </div>
                <div>
                    <h1 className='text-3xl'>{item.heading}</h1>
                    <p className='text-md mt-5'>{item.para}</p>
                </div>
                </div>
                </>
            ))}
        </div>
        <img className='absolute h-[61%] w-[35%] right-0 top-[80vw] rounded-tl-[120px]' src="https://images.unsplash.com/photo-1498735599329-ed6e3798cdcb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <Link to='/aboutus' className='rounded-full px-5 py-2 text-black absolute left-52 top-[95vw] bg-white'>Read More</Link>
    </div>
  )
}

export default FourthPage