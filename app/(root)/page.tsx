import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ArchiveRestore } from 'lucide-react'

export default function Home() {
  return (
    
    <div className="flex flex-col gap-20 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center w-3/4 py-36 bg-white">
        <h1 className="font-abhayaLibre text-[78px] leading-[66px] pb-3 text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">A Modern Marketing Platform</h1>
        <p className="text-[17px] text-black w-3/5 mx-auto">Conversion is the AI-native Marketing Automation Platform built for high-growth B2B businesses. Activate customer data, build custom journeys, </p>
        <div className="flex mx-auto justify-center items-center pt-12 gap-6">
          <p className="rounded-xl bg-[#FFCB65] py-2 w-[160px] border border-orange-300 text-white font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200">Try now</p>
          <p className="rounded-xl border border-black w-[160px] py-2 font-semibold cursor-pointer hover:bg-gray-100 text-black">See more</p>
        </div>
        
      </div>
      <div className="justify-center items-center mx-auto px-20 h-screen flex flex-col gap-8 w-10/12 m-16">
        <div className="flex gap-12">
          <p className="bg-gray-200 w-2/4 h-[300px] rounded-xl"/>
          <div className="w-3/5 align-middle self-center">
            <h3 className="font-abhayaLibre text-[44px] leading-[66px] pb-3 text-[#1E2967] font-medium w-3/4 tracking-tight">We create Belonging</h3>
            <p>We don’t just help immigrants adjust, we help them feel seen, heard, and valued. We create a community where everyone of all backgrounds can come together and have a shared experience as immigrants and newcomers. </p>
            <p className="rounded-3xl bg-[#FFCB65] py-2 w-[160px] border border-orange-300 text-white text-center font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200 my-8">Try now</p>
          </div>
        </div>
        <div className="flex gap-12">
          
          <div className="w-3/5 align-middle self-center">
            <h3 className="font-abhayaLibre text-[44px] leading-[66px] text-[#1E2967] font-medium w-3/4 tracking-tight">We create Belonging</h3>
            <p>We don’t just help immigrants adjust, we help them feel seen, heard, and valued. We create a community where everyone of all backgrounds can come together and have a shared experience as immigrants and newcomers. </p>
            <p className="rounded-3xl bg-[#FFCB65] py-2 w-[160px] border border-orange-300 text-white text-center font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200 my-8">Try now</p>
          </div>
           <p className="bg-gray-200 w-2/4 h-[300px] rounded-xl"/>
        </div>
        <div className="flex gap-12">
          <p className="bg-gray-200 w-2/4 h-[300px] rounded-xl"/>
          <div className="w-3/5 align-middle self-center">
            <h3 className="font-abhayaLibre text-[44px] leading-[66px] text-[#1E2967] font-medium w-3/4 tracking-tight">We create Belonging</h3>
            <p>We don’t just help immigrants adjust, we help them feel seen, heard, and valued. We create a community where everyone of all backgrounds can come together and have a shared experience as immigrants and newcomers. </p>
            <p className="rounded-3xl bg-[#FFCB65] py-2 w-[160px] border border-orange-300 text-white text-center font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FFCB65] to-orange-200 my-8">Try now</p>
          </div>
        </div>
      </div>
      <div className="justify-center items-center mx-auto px-20 py-32 flex flex-col gap-8 text-center bg-red-100">
        <p className="text-[42px] font-abhayaLibre text-black w-3/5 mx-auto leading-[48px] tracking-tight">Conversion is the AI-native Marketing Automation Platform built for high-growth B2B businesses. Activate customer data, build custom journeys, iut v iuyy k ubyk iy o </p>
      </div>
      <div className="justify-center items-center mx-auto px-20 py-24 flex flex-col gap-8">
        <div className="mx-auto text-center pb-12">
          <h2 className="font-abhayaLibre text-[64px] leading-[66px] text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">A Modern Platform</h2>
          <p className="text-[17px] text-black w-3/5 mx-auto">Conversion is the AI-native Marketing Automation Platform built for high-growth B2B businesses. Activate customer data, build custom journeys, </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 justify-center items-center">
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">This is my feature</h4>
              <p className="text-[16px]">Battle-tested infrastructure you can trust in production and at scale.</p>
            </div>
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">This is my feature</h4>
              <p className="text-[16px]">Battle-tested infrastructure you can trust in production and at scale.</p>
            </div>
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">This is my feature</h4>
              <p className="text-[16px]">Battle-tested infrastructure you can trust in production and at scale.</p>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">This is my feature</h4>
              <p className="text-[16px]">Battle-tested infrastructure you can trust in production and at scale.</p>
            </div>
            <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">This is my feature</h4>
              <p className="text-[16px]">Battle-tested infrastructure you can trust in production and at scale.</p>
            </div>
           <div className="size-[300px] bg-gray-100 flex flex-col justify-center items-left px-12">
              <div className="bg-red-50 size-12 p-3 mb-4 rounded-full">
                <ArchiveRestore className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">This is my feature</h4>
              <p className="text-[16px]">Battle-tested infrastructure you can trust in production and at scale.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center mx-auto px-20 pb-20 text-center">
          <h2 className="font-abhayaLibre text-[60px] leading-[66px] pb-3 text-[#1E2967] w-4/5 font-medium mx-auto tracking-tight">Take a low risk, get Started Right Now</h2>
          <p className="text-[17px] text-black w-3/5 mx-auto">Unlock your inner potantial and career and time and money</p>
          <div className="bg-orange-200 w-[150px] p-2 mx-auto mt-6"> Start Now</div>
        </div>
    </div>
  );
}
