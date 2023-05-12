import React from 'react'

const Middle = () => {
  return (
    <section className='h-[910px] w-full bg-[#3E3C3C] bg-opacity-30 mx-auto my-10 rounded-xl grid items-center sm:px-3 sm:h-[227px] sm:flex  '>
        <div className='bg-[#3E3C3C] bg-opacity-40 bg rounded-xl h-[200px] w-[200px] mx-auto grid hover:-translate-y-1 duration-200'>
           <div className='grid '>
            <img className='self-center mx-[85px] my-3' src="/images/glasses.png" alt="" />
            <h3 className='text-center font-medium text-white'>Experience the world through VR glasses</h3>
           </div>
           

        </div>
        <div className='bg-[#3E3C3C] bg-opacity-40 rounded-xl h-[200px] w-[200px] mx-auto hover:-translate-y-1 duration-200'>
           <div className=' grid gap-5 my-6 p-1  '>
            <img className=' mx-[80px] my-3' src="/images/360.png" alt="" />
            <h3 className='text-center font-medium text-white'>View all your surrounding with 360</h3>
           </div>

        </div>
        <div className='bg-[#3E3C3C] bg-opacity-40 rounded-xl h-[200px] w-[200px] mx-auto hover:-translate-y-1 duration-200'>
           <div className='grid gap-5 my-6 '>
            <img className='self-center mx-[85px] my-3' src="/images/gamin.png" alt="" />
            <h3 className='text-center font-medium text-white'>Incredible gaming experience</h3>
           </div>

        </div>
        <div className='bg-[#3E3C3C] bg-opacity-40 rounded-xl h-[200px] w-[200px] mx-auto hover:-translate-y-1 duration-200'>
           <div className='grid gap-5 my-6 '>
            <img className='self-center mx-[85px] my-3' src="/images/money.png" alt="" />
            <h3 className='text-center font-medium text-white'>Making meetings and tours easier</h3>
           </div>

        </div>
    </section>
  )
}

export default Middle