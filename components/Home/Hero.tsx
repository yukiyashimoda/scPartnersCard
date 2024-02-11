import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className='  '>
      <div className="p-5 sm:px-10 md:px-20 ">
          <h2 className='flex jusutify-center text-[18px] md:text-[18px] sm:-[16px] mt-3 ml-3 font-400 tracking-wide text-emerald-400'>
            <span className='special-font'>SPECIAL CLUB</span>
          </h2>
          <h2 className='text-[35px] md:text-[35px] sm:-[30px] mb-[3px] ml-3 font-800 justify-center'>
            <span className='special-font'>PARTNERS</span>
          </h2>
          <img src='../sclounge.jpg' className="shadow-[0.5rem_0.5rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f5f5f5]  rounded-2xl" alt="Special Club" />          
      </div>
      <div className="relative flex flex-col p-5 ">
        <div className="flex-grow">
          
          <h2 className='text-[14px] text-gray-600 pr-5 ml-3'>SPECIAL CLUB入会企業様、提携企業様をご紹介。会員様がご利用いただける豊富な特典をご用意しております。</h2>
          <h2 className='text-[14px] text-gray-600 pr-5 mt-2 ml-3'>コラボしたい、共同開発をしたい。一緒にビジネスをしたい。など、皆様のご要望もお繋ぎいたします。下記のボタンよりお気軽にお問合せください。</h2>
       </div>
          <button className='text-[12px] mx-2 mt-5 min-w-[80px] mb-3 bg-black hover:bg-dark-brown text-white font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-full m-2 sm:m-2 hover:border-[1px] cursor-pointer duration-5 self-end'>
          <a href="mailto:contact&#64;monreve-sc.co.jp">お問合せはこちら</a>
          </button>
      </div>
    </div>
  )
}

export default Hero