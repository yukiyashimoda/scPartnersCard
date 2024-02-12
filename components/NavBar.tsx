import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='bg-transparent flex items-center 
      justify-between p-3 px-5 z-99'>
      <div className='flex'>
        <div className='flex items-center gap-5 pl-[3%] p-1 '>
          <Image src='/SClogo.svg'
            alt='logo'
            width={50}
            height={70}
          />
        </div>
        <div>
          <h2 className='flex jusutify-center text-[14px] md:text-[12px] sm:-[10px] ml-3 font-400 tracking-widest text-emerald-600 items-center mt-1'>
            <span className='special-font'>SPECIALCLUB</span>
          </h2>
          <h2 className='text-[14px] md:text-[12px] sm:-[10px] ml-3 font-800 tracking-widest'>
            <span className='special-font'>PARTNERS</span>
          </h2>
        </div>
      </div>   
      <div>
        <button className='text-[12px] m-2 mt-3 min-w-[80px] mb-3 bg-black hover:bg-dark-brown text-white font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-full sm:m-2 hover:border-[1px] cursor-pointer duration-5 self-end'>
          <a href="mailto:contact&#64;monreve-sc.co.jp">お問合せ</a>
        </button>
      </div>      
    </div>
  )
}

export default NavBar