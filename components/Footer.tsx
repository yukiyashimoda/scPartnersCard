import Image from 'next/image'
import React from 'react'

function Footer() {
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">SPECIAL CLUB PARTNERS</a>. All Rights Reserved.</span>
    </div>
  )
}

export default Footer