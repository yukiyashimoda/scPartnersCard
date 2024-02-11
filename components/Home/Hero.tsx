import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className=' p-5 sm:px-10 md:px-20 '>
      <img src='../sclounge.jpg' className="shadow-[0.5rem_0.5rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f5f5f5]  rounded-2xl " alt="Special Club" /> 
      <div className="relative flex flex-col p-5 ">
        {/* <div className="flex-grow">
          
          <h2 className='text-[14px] text-gray-600 pr-5'>SPECIAL CLUB入会企業様、提携企業様をご紹介。会員様がご利用いただける豊富な特典をご用意しております。</h2>
          <h2 className='text-[14px] text-gray-600 pr-5 mt-2'>コラボしたい、共同開発をしたい。一緒にビジネスをしたい。など、皆様のご要望もお繋ぎいたします。下記のボタンよりお気軽にお問合せください。</h2>
       </div> */}
          
      </div>
    </div>
  )
}

export default Hero