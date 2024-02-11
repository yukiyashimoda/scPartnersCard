import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='bg-transparent flex items-center 
    justify-between p-3 px-5 z-99'>
      <div className='flex items-center gap-5 pl-[5%] p-5 '>
      <Image src='/SClogo.svg'
      alt='logo'
      width={40}
      height={60}
      />
      <div>
      <h2 className='text-[14px] md:text-[14px] sm:-[10px] ml-2 font-400 tracking-wide text-gray-600'>
            <span className='special-font'>SPECIAL CLUB</span>
      </h2>
      <h2 className='text-[14px] md:text-[14px] sm:-[10px] ml-2 font-400 tracking-wide text-gray-600'>
            <span className='special-font'>PARTNERS</span>
      </h2>
      </div>
      
    </div>
    </div>
  )
}

export default NavBar