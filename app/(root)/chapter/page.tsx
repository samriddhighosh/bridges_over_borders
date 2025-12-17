import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const ChapterPage = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center lg:w-3/4 py-32 bg-white">
        <p className='mx-auto text-[15px] font-semibold mb-3 border-b w-[100px] border-b-pink-200'>
          Our Chapters
        </p>
        <h1 className="font-abhayaLibre text-[62px] lg:text-[72px] leading-[58px] lg:leading-[66px] pb-3 text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">Start your own chapter</h1>
        <p className="text-[17px] text-black w-4/5 lg:w-3/5 mx-auto"> Create a space for immigrants, newcomers, and volunteers to connect, learn, and grow together. Chapter teams organize events, host workshops, and expand the mission of Bridges & Bonds across regions.

 </p>
        <div className="flex mx-auto justify-center items-center pt-16 gap-16">
          <Link className="bg-orange-200 text-orange-900 w-[160px] py-3 cursor-pointer hover:bg-[#f5b942] to-orange-200 hover:border border-orange-800" href="https://docs.google.com/forms/d/1WdCVpyHLzoZALflsTOTDecRF6d0hEnTxkbiH2BHqXM8/viewform?edit_requested=true">Volunteer</Link>
          <p className="border border-black w-[160px] py-3 font-semibold cursor-pointer hover:bg-gray-100 text-black">See more</p>
        </div>
      </div>
      <iframe className='w-full h-screen px-20' src="https://docs.google.com/forms/d/1KyJYHwos2Wt6buuNP--dIOQceL9-lEAs6a8EPm1gzgE/viewform?edit_requested=true"></iframe>
      </div>
  )
}

export default ChapterPage