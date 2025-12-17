import Navbar from '@/components/Navbar'
import { ArchiveRestore, HandHeart, PersonStanding } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center w-full lg:w-3/4 py-12 bg-white">
        <p className='mx-auto text-[15px] font-semibold mb-6 border-b w-[100px] border-b-[#FFCB65]'>
          About Us
        </p>
        <h1 className="font-abhayaLibre text-[64px] lg:text-[72px] leading-[66px] pb-4 text-[#1E2967] font-medium w-3/5 mx-auto tracking-tight">What is Bridges and Bonds?</h1>
        <p className="text-[17px] text-black w-4/5 lg:w-3/5 mx-auto pb-12"> Bridges & Bonds is a student-led nonprofit organization dedicated to empowering immigrants and newcomers in the U.S., through mentorship, skill-building, and community support. We also aim to combat post migration loneliness, isolation, and alienation through cultural, mental, and adaptation support.
</p>
        <p className="bg-orange-200 text-orange-900 w-[160px] py-3 cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200 hover:border border-orange-800 mx-auto">Try now</p>
      </div>
      <div className="flex flex-col gap-10">
          <div className="lg:flex gap-10 justify-center items-center text-center px-20">
            <div className="lg:w-1/3 bg-gray-100 flex flex-col justify-center items-center px-12 mb-6 h-[280px]">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <HandHeart className="justify-self-center "/>
              </div>
              
              <h4 className="text-[22px] font-semibold pb-1">Connections</h4>
              <p className="text-[16px]">We help connect individuals with many others foostering communication</p>
            </div>
            <div className="lg:w-1/3 bg-gray-100 flex flex-col justify-center items-center px-12 mb-6 h-[280px]">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <HandHeart className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Opportunities</h4>
              <p className="text-[16px]">We introduce families into new services and programs to help them grow </p>
            </div>
            <div className="lg:w-1/3 bg-gray-100 flex flex-col justify-center items-center px-12 h-[280px]">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <HandHeart className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Growth</h4>
              <p className="text-[16px]">We help lift families and empower them in a new world</p>
            </div>
          </div>
          </div>
      <div className='lg:flex gap-8 px-20 lg:px-28 w-full justify-center items-center'>
        <div className='w-5/5 lg:w-3/5 py-12'>
          <div className='p-2 w-[100px] rounded-fullitems-center justify-center text-orange-800'>
             <p className='text-[13px] border-b-orange-900 border-b'>Our Founder</p>
          </div>
         
          <h3 className='text-[32px] pb-4'>Avantika (Ava) Goswami</h3>
          <p>I founded this organization from my own journey as an immigrant and newcomer to the U.S. I moved here from India in the middle of my freshman year of high school. What began as just a transfer of jobs and a step towards endless opportunities and dreams, turned into a story full of unanticipated challenges and surprises. 
Back home, I was outspoken and confident—the one who always raised her hand and voiced her thoughts. <br/><br/>But here, my voice felt trapped behind my accent and uncertainty. I became the missing puzzle piece, struggling to fit in. I often stayed silent, not out of indifference, but from fear—fear of judgment, and fear of losing the chance to prove myself in a new world.
<br/><br/>Meanwhile, my family faced their own battles. My parents navigated financial systems and legal processes that seemed endless, while my younger brother and I tried to understand a completely new education system. For me, terms like GPA and SAT/ACT didn’t make sense until my junior year. It took time, mistakes, and perseverance to find my footing.
<br/><br/><br/>Over time, I realized how deeply isolating it can feel to start over in a new country. The struggles that come with moving not just homes but continents—the uncertainty, the adjustment, the invisible waiting period before you finally feel like you belong—are things most immigrants quietly endure.
That realization became the seed for Bridges & Bonds, a nonprofit dedicated to helping immigrants and newcomers adapt, connect, and rebuild their lives with confidence. What started as a personal challenge grew into a mission to empower others, to make sure no one else felt the silence and isolation I once did.
My accent, my name, and my story weren’t barriers; they were bridges—to connection, empathy, and understanding. Through Bridges & Bonds, I hope to turn every struggle into strength and every difference into belonging.
<br/><br/><span className='text-[18px] font-semibold'>— Founder & Executive Director</span></p>
         </div>
        <div className='w-2/5 bg-gray-100'/>
      </div>
      
    </div>
  )
}

export default page