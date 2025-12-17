import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ArchiveRestore, Languages, HeartPlus, HeartHandshake, Earth, Gem, PlaneTakeoff, HandHeart, Brain, Sparkles } from 'lucide-react'
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="flex flex-col gap-12 justify-center items-center mx-auto font-onest bg-white text-black">
      <Navbar/>
      <div className="text-center items-center w-3/4 py-32 bg-white">
        <h1 className="font-abhayaLibre text-[58px] lg:text-[72px] leading-[54px] lg:leading-[66px] pb-3 text-[#1E2967] font-medium w-5/6 mx-auto tracking-tight">Changing communities, fostering connections</h1>
        <p className="text-[17px] text-black w-full lg:w-3/5 mx-auto">Empowering Immigrants Together to build opportunity, belonging, and community. Together we can open doors to new possibilities and perspectives </p>
        <div className="flex mx-auto justify-center items-center pt-16 gap-16">
          <Link className="bg-orange-200 text-orange-900 w-[160px] py-3 cursor-pointer hover:bg-[#f5b942] to-orange-200 hover:border border-orange-800" href="https://docs.google.com/forms/d/e/1FAIpQLSfAoEZe_riGin-eDTFHBjNm4d2RffZ7NJu2XjfCOgS_UP1-Zw/viewform">Volunteer</Link>
          <Link className="border border-orange-900 w-[160px] py-3 font-semibold cursor-pointer hover:bg-gray-100 text-black" href="https://docs.google.com/forms/d/1WdCVpyHLzoZALflsTOTDecRF6d0hEnTxkbiH2BHqXM8/viewform?edit_requested=true">Immigrants</Link>
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
      <div className="justify-center items-center mx-auto lg:px-20 pb-20 text-center">
        {/* <p className="font-abhayaLibre text-[58px] leading-[66px] font-medium w-3/4 mx-auto tracking-tight">Who are we?</p>
        <p className="text-[17px] text-black w-3/5 mx-auto"> We are a student-led nonprofit organization dedicated to empowering immigrants and newcomers in the U.S., through mentorship, skill-building, and community support. </p> */}
        <p className="text-[28px] text-black w-8/12 lg:w-4/5 mx-auto"> We are a student-led nonprofit organization dedicated to <span className="text-[#f5b942] font-semibold"> empowering immigrants and newcomers</span> in the U.S., through mentorship, skill-building, and community support. </p>
        <div>
          <div className="flex text-center justify-center items-center flex-col md:flex-row pt-24 mx-auto gap-16 ">
            <div className="size-52 text-center flex flex-col gap-4 p-6 bg-orange-100 border-orange-900 border">
              <HeartHandshake className="mx-auto size-[45px]"/>
              <div>
                <h2 className="text-[32px] leading-[34px] font-semibold pb-1">1000+</h2>
                <p className="text-[16px] leading-[22px]">immigrants impacted</p>
              </div>
              
            </div>
            <div className="size-52 text-center flex flex-col gap-4 p-6 bg-white border-orange-900 border">
              <Earth className="mx-auto size-[45px] bg-white"/>
              <div>
                <h2 className="text-[32px] leading-[34px] font-semibold pb-1">10+</h2>
                <p className="text-[16px] leading-[22px]">countries helped</p>
              </div>
              
            </div>
            <div className="size-52 text-center flex flex-col gap-4 p-6 bg-white border-orange-900 border">
              <Gem className="mx-auto size-[45px] bg-white"/>
              <div>
                <h2 className="text-[32px] leading-[34px] font-semibold pb-1">50+</h2>
                <p className="text-[16px] leading-[22px]">regions expanded</p>
              </div>
              
            </div>
        </div>
        </div>
      </div>
      <div className="justify-center items-center mx-auto px-6 lg:px-20 flex flex-col gap-24 w-10/12">
        <div className="text-center">
          <p className="font-abhayaLibre text-[58px] leading-[66px] font-medium w-3/4 mx-auto tracking-tight">Who are we?</p>
          <p className="text-[17px] text-black w-4/5 mx-auto"> We are a student-led nonprofit organization dedicated to empowering immigrants and newcomers in the U.S., through mentorship, skill-building, and community support. </p>
        </div>
        <div className="lg:flex gap-12">
          <Image alt="Image represneting immigration" width={300} height={300} src="https://downloads.ctfassets.net/xf6mqlbz6glx/3DBULLK0UDYs83H2DeZ8O7/e9d3995043153413a748a0e78642059e/All_Ages-Family_with_three_kids_laughing_at_park-BeyondTheParents.jpg?fm=jpg&fl=progressive&w=320&q=60" className="bg-gray-200 lg:w-2/4 h-[280px] rounded-xl"/>
          <div className="lg:w-4/5 align-middle self-center mt-4">
            <h3 className="text-[40px] leading-[46px] py-3 text-[#1E2967] font-medium w-3/4 tracking-tight">We Create Belonging</h3>
            <p>We don’t just help immigrants adjust, we help them feel seen, heard, and valued. We create a community where everyone of all backgrounds can come together and have a shared experience as immigrants and newcomers. </p>
          </div>
        </div>
        <div className="lg:flex gap-12">
          
          <div className="lg:w-4/5 align-middle self-center mb-4">
            <h3 className="text-[40px] leading-[46px] py-3 text-[#1E2967] font-medium w-3/4 tracking-tight">We empower through education</h3>
            <p>From financial literacy to mental wellness to even cultural integration, our programs give people tools to build independent, confident lives in the U.S. and understand the system to full lengths.
 </p>
          </div>
           <Image alt="Image represneting immigration" width={300} height={300} src="https://cdn.prod.website-files.com/6515c70053a53878caa14f09/6708557dc6ae5587ffee8a68_zoom%20hearing%20webinar01.jpg" className="bg-gray-200 lg:w-2/4 h-[280px] rounded-xl"/>
        </div>
        <div className="lg:flex gap-12">
          <Image alt="Image representing immigration" width={300} height={300} src="https://litiligroup.com/wp-content/uploads/2024/08/diversity-6-1024x683.jpg" className="bg-gray-200 lg:w-2/4 h-[280px] rounded-xl"/>
          <div className="lg:w-4/5 align-middle self-center mt-4">
            <h3 className="text-[40px] leading-[46px] py-3 text-[#1E2967] font-medium w-3/4 tracking-tight">We turn stories into action</h3>
            <p>Each immigrant’s journey inspires change — in their community, their workplace, and beyond. Every challenge is transformed into a story of self-growth, persistence, and adaptation, here.
 </p>
            </div>
        </div>
      </div>
      
      <div className="justify-center items-center mx-auto px-2 lg:px-20 py-24 flex flex-col gap-8">
        <div className="mx-auto text-center pb-12">
          <h2 className="font-abhayaLibre text-[64px] leading-[66px] text-[#1E2967] font-medium w-3/4 mx-auto tracking-tight">What makes us Special?</h2>
          <p className="text-[17px] text-black w-3/5 mx-auto">Our one-on-one mentorship sessions offer immigrants continuous guidance in language practice, cultural understanding, and resource access; completely free and community-driven. </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="lg:flex gap-10 justify-center items-center">
            <div className="size-[300px] hover:bg-orange-100 flex flex-col justify-center items-left px-2 lg:px-12">
              <div className="bg-orange-100 size-12 p-3 mb-4 rounded-full">
                <Languages className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Language-Friendly Guidance</h4>
              <p className="text-[15px]">We provide clear, multilingual-friendly online guides and resources that help immigrants understand U.S. cultures.</p>
            </div>
            <div className="size-[300px] hover:bg-orange-100 flex flex-col justify-center items-left px-2 lg:px-12">
              <div className="bg-orange-100 size-12 p-3 mb-4 rounded-full">
                <HeartPlus className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Personalized One-on-One Support</h4>
              <p className="text-[15px]">Immigrants can book sessions with trained volunteers to ask questions and receive guidance.</p>
            </div>
            <div className="size-[300px] hover:bg-orange-100 flex flex-col justify-center items-left px-2 lg:px-12">
              <div className="bg-orange-100 size-12 p-3 mb-4 rounded-full">
                <PlaneTakeoff className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Transportation Knowledge</h4>
              <p className="text-[15px]">Individuals planning to move to the U.S. can access resources and book sessions before arriving.</p>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="size-[300px] hover:bg-orange-100 flex flex-col justify-center items-left px-2 lg:px-12">
              <div className="bg-orange-100 size-12 p-3 mb-4 rounded-full">
                <HandHeart className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Supportive Community</h4>
              <p className="text-[15px]">Community of newcomers where people can form friendships, share experiences, and support one another.</p>
            </div>
            <div className="size-[300px] hover:bg-orange-100 flex flex-col justify-center items-left px-2 lg:px-12">
              <div className="bg-orange-100 size-12 p-3 mb-4 rounded-full">
                <Brain className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Empowerment Through Knowledge</h4>
              <p className="text-[15px]">By combining resources and community, we help immigrants feel more confident navigating life in the U.S.</p>
            </div>
           <div className="size-[300px] hover:bg-orange-100 flex flex-col justify-center items-left px-2 lg:px-12">
              <div className="bg-orange-100 size-12 p-3 mb-4 rounded-full">
                <Sparkles className="justify-self-center "/>
              </div>
              
              <h4 className="text-[20px] font-semibold pb-1">Opportunities</h4>
              <p className="text-[15px]">Exclusive access to opportunities. We connect immigrants to educational and personal growth opportunities.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center mx-auto bg-orange-100 lg:px-30 py-20 text-center w-4/5">
         <h2 className="font-abhayaLibre text-[28px] lg:text-[36px] leading-[32px] lg:leading-[44px] pb-3 text-[#1E2967] w-4/5 font-medium mx-auto tracking-tight">"As a newcomer to the U.S., the nonprofit's website was a lifesaver. The one-on-one sessions provided essential guidance on everything from education to culture to just getting situated in this country. Thanks to their support,  I quickly found my footing and felt at home much sooner than I expected."</h2>
          <p className="text-[17px] text-black w-3/5 mx-auto">- Sally Gomez</p>
      </div>
      <div className="justify-center items-center mx-auto px-4 lg:px-20 py-20 text-center">
          <h2 className="font-abhayaLibre text-[48px] lg:text-[60px] leading-[50px] lg:leading-[60px] pb-4 text-[#1E2967] w-4/5 font-medium mx-auto tracking-tighter">Make a difference within communities today!</h2>
          <p className="text-[17px] text-black w-4/5 lg:w-2/5 mx-auto">Join us in our mission to foster belonging by making newcomers feel at home</p>
          <div className="hover:border border-orange-900 bg-orange-200 cursor-pointer text-orange-900 w-[150px] p-2 mx-auto mt-6 hover:bg-[#f5b942] to-orange-200"> Join Us</div>
        </div>
    </div>
  );
}
