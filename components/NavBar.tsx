import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='bg-transparent flex items-center 
    justify-between p-3 px-5 '>
      <div className='flex items-center gap-5 ml-[70px] '>
      <Image src='/SClogo.svg'
      alt='logo'
      width={50}
      height={80}
      />
    </div>
    </div>
  )
}

export default NavBar