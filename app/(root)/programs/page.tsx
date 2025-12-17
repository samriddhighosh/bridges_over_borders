import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const ProgramPage = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center lg:w-3/4 py-24 bg-white">
      <p className='mx-auto text-[15px] font-semibold mb-6 border-b w-[100px] border-b-[#FFCB65]'>
          Programs
        </p>
        <h1 className="font-abhayaLibre text-[60px] lg:text-[72px] leading-[58px] lg:leading-[66px] pb-3 text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">Featuring Our Direct One to One Sessions</h1>
        <p className="text-[17px] text-black w-3/5 mx-auto"> Each day features a different focus, Financial Literacy, Legal Information, Mental Health, Cultural Integration, Education & Skill Building, Employment Readiness.
 </p>
        <div className="flex mx-auto justify-center items-center pt-16 gap-16">
          <Link className="bg-orange-200 text-orange-900 w-[160px] py-3 cursor-pointer hover:bg-[#f5b942] to-orange-200 hover:border border-orange-800" href="https://docs.google.com/forms/d/1WdCVpyHLzoZALflsTOTDecRF6d0hEnTxkbiH2BHqXM8/viewform?edit_requested=true">Volunteer</Link>
          <p className="border border-black w-[160px] py-3 font-semibold cursor-pointer hover:bg-gray-100 text-black">See more</p>
        </div>
        
      </div>
      </div>
  )
}

export default ProgramPage