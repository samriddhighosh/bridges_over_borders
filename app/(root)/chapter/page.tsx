import Navbar from '@/components/Navbar'
import React from 'react'

const ChapterPage = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center w-3/4 py-32 bg-white">
        <p className='text-[15px] font-semibold pb-3'>Our Chapers</p>
        <h1 className="font-abhayaLibre text-[72px] leading-[66px] pb-3 text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">Start your own chapter</h1>
        <p className="text-[17px] text-black w-3/5 mx-auto"> Create a space for immigrants, newcomers, and volunteers to connect, learn, and grow together. Chapter teams organize events, host workshops, and expand the mission of Bridges & Bonds across regions.

 </p>
        <div className="flex mx-auto justify-center items-center pt-16 gap-16">
          <p className="bg-[#FFCB65] w-[160px] py-3 text-white font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200">Try now</p>
          <p className="border border-black w-[160px] py-3 font-semibold cursor-pointer hover:bg-gray-100 text-black">See more</p>
        </div>
      </div>
      <iframe className='w-full h-screen px-20' src="https://docs.google.com/forms/d/1KyJYHwos2Wt6buuNP--dIOQceL9-lEAs6a8EPm1gzgE/viewform?edit_requested=true"></iframe>
      </div>
  )
}

export default ChapterPage