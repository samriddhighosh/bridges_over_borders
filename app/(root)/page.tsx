import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ArchiveRestore, Languages, HeartPlus } from 'lucide-react'
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="flex flex-col gap-12 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center w-3/4 py-32 bg-white">
        <h1 className="font-abhayaLibre text-[78px] leading-[66px] pb-3 text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">Bridges and Borders</h1>
        <p className="text-[17px] text-black w-3/5 mx-auto">Empowering Immigrants Together to build opportunity, belonging, and community. Together we can open doors to new possibilities and perspectives </p>
        <div className="flex mx-auto justify-center items-center pt-16 gap-16">
          <Link className="bg-[#FFCB65] w-[160px] py-3 text-white font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200" href="https://docs.google.com/forms/d/e/1FAIpQLSfAoEZe_riGin-eDTFHBjNm4d2RffZ7NJu2XjfCOgS_UP1-Zw/viewform">Volunteer</Link>
          <Link className="border border-black w-[160px] py-3 font-semibold cursor-pointer hover:bg-gray-100 text-black" href="https://docs.google.com/forms/d/1WdCVpyHLzoZALflsTOTDecRF6d0hEnTxkbiH2BHqXM8/viewform?edit_requested=true">Immigrants</Link>
        </div>
        {/* <div className="text-center justify-center items-center flex pt-24 mx-auto gap-12">
          <div className="size-40 bg-gray-200 rounded-xl">

          </div>
          <div className="size-40 bg-gray-200 rounded-xl">

          </div>
          <div className="size-40 bg-gray-200 rounded-xl">

          </div>
        </div> */}
      </div>
      {/* <div className="flex gap-8 justify-center items-center">
        <div className="size-[150px] bg-gray-100 flex flex-col justify-center items-center text-center px-12">
            <h2 className="text-[20px] font-semibold pb-1">100+ Volunteers</h2>
        </div>
        <div className="size-[150px] bg-gray-100 flex flex-col justify-center items-center text-center px-12">
            <h2 className="text-[20px] font-semibold pb-1">100+ Volunteers</h2>
        </div>
        <div className="size-[150px] bg-gray-100 flex flex-col justify-center items-center text-center px-12">
            <h2 className="text-[20px] font-semibold pb-1">100+ Volunteers</h2>
        </div>
      </div> */}
      <div className="justify-center items-center mx-auto px-6 lg:px-20 flex flex-col gap-16 w-10/12">
        <div className="lg:flex gap-12">
          <p className="bg-gray-200 lg:w-2/4 h-[300px] rounded-xl"/>
          <div className="lg:w-3/5 align-middle self-center">
            <h3 className="font-abhayaLibre text-[44px] leading-[46px] py-3 text-[#1E2967] font-medium w-3/4 tracking-tight">We create Belonging</h3>
            <p>We don’t just help immigrants adjust, we help them feel seen, heard, and valued. We create a community where everyone of all backgrounds can come together and have a shared experience as immigrants and newcomers. </p>
            <p className=" bg-[#FFCB65] py-2 w-[160px] border border-orange-300 text-white text-center font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200 my-8">Try now</p>
          </div>
        </div>
        <div className="lg:flex gap-12">
          
          <div className="lg:w-3/5 align-middle self-center">
            <h3 className="font-abhayaLibre text-[44px] leading-[46px] py-3 text-[#1E2967] font-medium w-3/4 tracking-tight">We empower through education</h3>
            <p>From financial literacy to mental wellness to even cultural integration, our programs give people tools to build independent, confident lives in the U.S. and understand the system to full lengths.
 </p>
            <p className="bg-[#FFCB65] py-2 w-[160px] border border-orange-300 text-white text-center font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200 my-8">Try now</p>
          </div>
           <p className="bg-gray-200 lg:w-2/4 h-[300px] rounded-xl"/>
        </div>
        <div className="lg:flex gap-12">
          <p className="bg-gray-200 lg:w-2/4 h-[300px] rounded-xl"/>
          <div className="lg:w-3/5 align-middle self-center">
            <h3 className="font-abhayaLibre text-[44px] leading-[46px] py-3 text-[#1E2967] font-medium w-3/4 tracking-tight">We turn stories into action:</h3>
            <p>Each immigrant’s journey inspires change — in their community, their workplace, and beyond. Every challenge is transformed into a story of self-growth, persistence, and adaptation, here.
 </p>
            <p className="bg-[#FFCB65] py-2 w-[160px] border border-orange-300 text-white text-center font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200 my-8">Try now</p>
          </div>
        </div>
      </div>
      <div className="justify-center items-center mx-auto px-2 lg:px-20 py-32 text-center bg-red-100">
        <p className="text-[42px] font-abhayaLibre text-black w-3/5 mx-auto leading-[48px] tracking-tight">We are a student-led nonprofit organization dedicated to empowering immigrants and newcomers in the U.S., through mentorship, skill-building, and community support. 
 </p>
      </div>
      <div className="justify-center items-center mx-auto px-2 lg:px-20 py-24 flex flex-col gap-8">
        <div className="mx-auto text-center pb-12">
          <h2 className="font-abhayaLibre text-[64px] leading-[66px] text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">What makes us Special?</h2>
          <p className="text-[17px] text-black w-3/5 mx-auto">Conversion is the AI-native Marketing Automation Platform built for high-growth B2B businesses. Activate customer data, build custom journeys, </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="lg:flex gap-10 justify-center items-center">
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <Languages className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Language-Friendly Guidance</h4>
              <p className="text-[16px]">We provide clear, multilingual-friendly online guides and resources that help immigrants understand U.S. cultures.</p>
            </div>
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <HeartPlus className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Personalized One-on-One Support</h4>
              <p className="text-[16px]">Immigrants can book sessions with trained volunteers to ask questions and receive guidance.</p>
            </div>
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Transportation Knowledge</h4>
              <p className="text-[16px]">Individuals planning to move to the U.S. can access resources and book sessions before arriving.</p>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Supportive Community</h4>
              <p className="text-[16px]">Community of newcomers where people can form friendships, share experiences, and support one another.</p>
            </div>
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Empowerment Through Knowledge</h4>
              <p className="text-[16px]">By combining resources and community, we help immigrants feel more confident navigating life in the U.S.</p>
            </div>
           <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Opportunities</h4>
              <p className="text-[16px]">Exclusive access to opportunities. We connect immigrants to educational and personal growth opportunities.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center mx-auto bg-gray-100 px-20 lg:px-52 py-20 text-center">
         <h2 className="font-abhayaLibre text-[40px] leading-[44px] pb-3 text-[#1E2967] w-4/5 font-medium mx-auto tracking-tight">"This hhas helped me improve so much!"</h2>
          <p className="text-[17px] text-black w-3/5 mx-auto">- Sally Gomez</p>
      </div>
      <div className="justify-center items-center mx-auto px-20 py-20 text-center">
          <h2 className="font-abhayaLibre text-[60px] leading-[66px] pb-3 text-[#1E2967] w-4/5 font-medium mx-auto tracking-tight">Join us, and make a difference today!</h2>
          <p className="text-[17px] text-black w-3/5 mx-auto">Join us today</p>
          <div className="bg-orange-200 w-[150px] p-2 mx-auto mt-6"> Start Now</div>
        </div>
    </div>
  );
}
