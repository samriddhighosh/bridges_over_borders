import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const ProgramPage = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center w-3/4 py-32 bg-white">
        <h1 className="font-abhayaLibre text-[72px] leading-[66px] pb-3 text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">Featuring Our One on One Sessions</h1>
        <p className="text-[17px] text-black w-3/5 mx-auto"> Each day features a different focus, Financial Literacy, Legal Information, Mental Health, Cultural Integration, Education & Skill Building, Employment Readiness.
 </p>
        <div className="flex mx-auto justify-center items-center pt-16 gap-16">
          <Link className="bg-[#FFCB65] w-[160px] py-3 text-white font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200" href="https://docs.google.com/forms/d/1WdCVpyHLzoZALflsTOTDecRF6d0hEnTxkbiH2BHqXM8/viewform?edit_requested=true">Sign Up</Link>
          <p className="border border-black w-[160px] py-3 font-semibold cursor-pointer hover:bg-gray-100 text-black">See more</p>
        </div>
        
      </div>
      </div>
  )
}

export default ProgramPage