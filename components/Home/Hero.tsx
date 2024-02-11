import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className=' '>
      <div className="relative flex flex-col">
        <div className="flex-grow">
          <h2 className='text-[35px] md:text-[30px] sm:-[20px] font-800 mt-5 ml-3'>SPECIAL CLUB <span className='text-gray-600'>PARTNERS</span></h2>
          <h2 className='text-[14px] text-gray-600 pr-5 mt-5 ml-3'>SPECIAL CLUB入会企業様、提携企業様をご紹介。会員様がご利用いただける豊富な特典をご用意しております。</h2>
          <h2 className='text-[14px] text-gray-600 pr-5 mt-5 ml-3'>コラボしたい、共同開発をしたい。一緒にビジネスをしたい。など、皆様のご要望もお繋ぎいたします。下記のボタンよりお気軽にお問合せください。</h2>
       </div>
          <button className='text-[12px] mx-2 mt-5 min-w-[80px] bg-black hover:bg-dark-brown text-white font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-full m-2 sm:m-2 hover:border-[1px] cursor-pointer duration-5 self-end'>
          <a href="mailto:contact&#64;monreve-sc.co.jp">お問合せはこちら</a>
          </button>
      </div>
      {/* <div className='shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] group bg-[#f2f2f2] p-2 sm:p-5 rounded-2xl m-2 sm:m-2 hover:bg-white hover:border-[1px] cursor-pointer duration-5 grid sm:grid-cols-1 md:grid-cols-2 relative'>
        <div>
          <img src='../sclounge.jpg' alt="Special Club" />
        </div>
        
      </div> */}
    </div>
  )
}

export default Hero