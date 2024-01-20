import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='grid grid-cols-1 '>
      <div>
      <h2 className='text-[30px] md:text-[25px] sm:-[25px] 
            font-500 '>SPECIAL CLUB <span className='text-gray-600'>PARTNERS</span></h2>
            <h2 className='text-[14px] text-gray-600 pr-5 mt-5'>SPECIAL CLUB入会企業様、提携企業様をご紹介。会員様がご利用いただける豊富な特典をご用意しております。
            </h2>
            <h2 className='text-[14px] text-gray-600 pr-5 mt-5'>コラボしたい、共同開発をしたい。一緒にビジネスをしたい。など、皆様のご要望もお繋ぎいたします。下記のボタンよりお気軽にお問合せください。
            </h2>
             
            <button className='p-2 mt-5 bg-gray-800 text-white
            px-4 rounded-full 
            hover:scale-105 transition-all text-[14px]'>お問合せはこちら</button>
      </div>
    </div>
  )
}

export default Hero