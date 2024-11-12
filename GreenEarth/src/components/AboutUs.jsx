import React from 'react'
import { Link } from 'react-router-dom';

function AboutUs() {
  const data = [
    {heading: 'Who We Are', point1: 'We are a passionate team dedicated to promoting sustainable living by connecting people with nature.', point2: 'Our mission is to make plant care accessible and enjoyable for everyone.'},
    {heading: 'Our Vision', point1: 'To create a greener world by encouraging people to bring plants into their lives.', point2: 'To offer a seamless experience for purchasing and caring for plants.'},
    {heading: 'What We Offer', point1: 'A diverse collection of indoor and outdoor plants for homes and offices.'},
    {heading: 'Why Choose Us?', point1: 'Sustainability: For every plant you purchase, we plant a tree on your behalf and keep you updated on its growth journey.', point2: 'Quality Assurance: We provide only the healthiest and most beautiful plants.'},
    {heading: 'Join Us in Our Journey', point1: 'Become a part of our green community. Together, let’s make a difference by bringing nature closer to home.'}
  ]
  const data2 = [
    {name: 'Anand Kumar', developer: 'Team Leader, Frontend Developer, Backend Developer', linkedIn: 'https://www.linkedin.com/in/anand-kumar96775464/'},
    {name: 'Kaushiki Tripathi', developer: 'Frontend Developer, Machine Learning', linkedIn: 'https://www.linkedin.com/in/kaushiki-tripathi-5026aa293/'},
    {name: 'Prateek Verma', developer: 'Frontend Developer', linkedIn: 'https://www.linkedin.com/in/vaishnavi-katiyar-299202264/'},
    {name: 'Vaishnavi Katiyar', developer: 'Frontend Developer', linkedIn: 'https://www.linkedin.com/in/prateek-verma-765405283/'}
  ];

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <img className='relative h-[106vw] w-screen' src="https://images.unsplash.com/photo-1498735599329-ed6e3798cdcb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute top-16 flex flex-col items-center justify-center w-full'>
      <div className='h-fit w-[90%] bg-white/40 backdrop-blur-md text-white  px-20 py-16'>
          <h1 className='text-5xl text-center font-medium'>About Us</h1>
          {
            data.map((item, index) => (
              <div key={index} className='mt-12'>
                <h2 className='text-4xl font-semibold mb-4'>{item.heading}</h2>
                <p className='text-xl'>{item.point1}</p>
                <p className='text-xl'>{item.point2}</p>
              </div>
            ))
          }
      </div>
      <div className=' h-fit w-[90%] bg-gradient-to-r from-[#636363] to-[#A2AB58] py-10 px-20'>
          <h1 className='text-5xl text-white font-medium text-center'>Our Team</h1>
          <div className='flex items-center justify-center gap-10 mt-6'>
          {
            data2.map((item, index)=>(
              <a href={item.linkedIn} key={index} target="_blank" 
              rel="noopener noreferrer" className='h-56 w-1/4 rounded-md px-8 py-6 bg-white bg-opacity-20'>
                <h1 className='text-3xl text-white font-semibold'>{item.name}</h1>
                <h2 className='text-lg font-medium text-white mt-4'>{item.developer}</h2>
              </a>
            ))
          }
          </div>
      </div>
      </div>
    </div>
  )
}

export default AboutUs
