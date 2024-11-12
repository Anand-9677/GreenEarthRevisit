import React from 'react'
import { CiGift } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";

function SecondPage() {
    const data = [
        {icons: <CiGift/>, content: 'Member Gift'},
        {icons: <CiDeliveryTruck/>, content: 'Fast and Free Delivery'},
        {icons: <MdSecurity/>, content: 'Money Back Guarantee'}
    ]
  return (
    <div className='h-[12vw] w-full px-10 flex items-center justify-between'>
      {data.map((item, index)=>(
        <div className='h-[26%] w-fit px-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
            <div className='flex items-center text-white justify-center'>
                <h2 className='text-3xl'>{item.icons}</h2>
                <h2 className='ml-4 text-xl'>{item.content}</h2>
            </div>
        </div>
      ))}
    </div>
  )
}

export default SecondPage
